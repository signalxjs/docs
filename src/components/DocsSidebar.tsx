/**
 * Documentation Sidebar Navigation
 * 
 * Uses auto-generated navigation from virtual:ssg-navigation
 */

import { component, type Define } from 'sigx';
import { RouterLink, useRoute } from '@sigx/router';
import { navigation, detectCollection } from 'virtual:ssg-navigation';
import type { NavSection, NavItem } from '@sigx/ssg';

type DocsSidebarProps = 
    & Define.Prop<'isOpen', boolean, false>
    & Define.Prop<'collection', string, false>
    & Define.Event<'close', void>;

export const DocsSidebar = component<DocsSidebarProps>(({ props, emit }) => {
    const route = useRoute();

    /**
     * Get sidebar sections for the current collection
     */
    const getSections = (): NavSection[] => {
        const collectionName = props.collection || detectCollection(route.path);
        if (!collectionName) return [];
        return navigation[collectionName]?.sidebar || [];
    };
    
    /**
     * Check if a nav item or any of its children is active
     */
    const isItemActive = (item: NavItem): boolean => {
        if (item.href && route.path === item.href) {
            return true;
        }
        if (item.items) {
            return item.items.some(isItemActive);
        }
        return false;
    };

    /**
     * Render a navigation item (handles nested items recursively)
     */
    const renderNavItem = (item: NavItem, depth: number = 0) => {
        const isActive = item.href ? route.path === item.href : false;
        const hasActiveChild = item.items ? item.items.some(isItemActive) : false;

        if (item.items && item.items.length > 0) {
            // Group with nested items
            return (
                <li>
                    <details open={depth === 0 || hasActiveChild}>
                        <summary class="font-medium text-base-content/50 cursor-pointer hover:text-base-content">
                            {item.title}
                        </summary>
                        <ul class="pl-2 mt-1 space-y-1 border-l border-base-content/10">
                            {item.items.map((child, idx) => (
                                <li key={idx}>
                                    {renderNavItem(child, depth + 1)}
                                </li>
                            ))}
                        </ul>
                    </details>
                </li>
            );
        }

        // Leaf item with link
        return (
            <RouterLink 
                to={item.href || '#'}
                class={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                    isActive 
                        ? 'bg-primary/10 text-primary font-medium' 
                        : 'text-base-content/50 hover:text-base-content hover:bg-base-200/50'
                }`}
                onClick={() => emit('close')}
            >
                {item.title}
            </RouterLink>
        );
    };
    
    return () => (
        <>
            {/* Mobile overlay */}
            {props.isOpen && (
                <div 
                    class="fixed inset-0 bg-black/50 z-40 lg:hidden"
                    onClick={() => emit('close')}
                />
            )}
            
            {/* Sidebar */}
            <aside 
                class={`fixed lg:relative top-16 lg:top-0 left-0 z-40 w-64 shrink-0 h-[calc(100vh-4rem)] lg:h-auto lg:sticky lg:top-16 bg-base-100 lg:bg-transparent border-r border-base-content/10 overflow-y-auto transition-transform lg:translate-x-0 ${
                    props.isOpen ? 'translate-x-0' : '-translate-x-full'
                }`}
            >
                <nav class="px-6 py-8 space-y-6">
                    {getSections().map((section, idx) => (
                        <div key={idx}>
                            <h3 class="text-xs font-semibold uppercase tracking-wider text-base-content/50 mb-3">
                                {section.title}
                            </h3>
                            <ul class="space-y-1">
                                {section.items.map((item, itemIdx) => (
                                    <li key={itemIdx}>
                                        {renderNavItem(item)}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </nav>
            </aside>
        </>
    );
});
