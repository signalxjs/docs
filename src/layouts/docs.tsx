/**
 * Docs Layout
 * 
 * Documentation layout with sidebar navigation.
 */

import { component, onMounted } from 'sigx';
import type { LayoutProps, LayoutSlots } from '@sigx/ssg';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { DocsSidebar } from '@/components/DocsSidebar';
import { TableOfContents } from '@/components/TableOfContents';
import { initializeTheme } from '@sigx/daisyui';

export default component<LayoutProps, unknown, LayoutSlots>(({ slots, props, signal }) => {
    const state = signal({ sidebarOpen: false });

    onMounted(() => {
        initializeTheme({ defaultTheme: 'dark' });
    });
    
    return () => (
        <div class="min-h-screen flex flex-col bg-base-100">
            <Navbar onMenuClick={() => { state.sidebarOpen = !state.sidebarOpen; }} />
            
            <div class="flex-1 w-full max-w-[90rem] mx-auto">
                <div class="flex">
                    {/* Sidebar */}
                    <DocsSidebar 
                        isOpen={state.sidebarOpen} 
                        onClose={() => state.sidebarOpen = false}
                    />
                    
                    {/* Main content */}
                    <main class="flex-1 min-w-0 px-6 py-8 lg:px-12">
                        <div class="max-w-4xl">
                            <article class="prose prose-lg max-w-none">
                                {slots.default()}
                            </article>
                        </div>
                    </main>
                    
                    {/* Table of Contents - desktop only */}
                    <aside class="hidden xl:block w-64 shrink-0 py-8 pr-8">
                        <div class="sticky top-24">
                            <TableOfContents headings={(props.meta?.headings || []) as { id: string; text: string; level: number }[]} />
                        </div>
                    </aside>
                </div>
            </div>
            
            <Footer />
        </div>
    );
});
