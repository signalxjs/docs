/**
 * Router Package Landing Page
 * 
 * @layout package
 */

import { component } from 'sigx';
import { PackageLanding } from '@/components/PackageLanding';

const RouterLanding = component(() => {
    return () => (
        <PackageLanding
            name="Router"
            npmName="@sigx/router"
            tagline="Declarative Routing for SignalX"
            description="A powerful, type-safe router with SSR support, route guards, lazy loading, and seamless integration with SignalX's reactive system."
            accentColor="text-green-500"
            gradientFrom="from-green-500"
            gradientTo="to-emerald-400"
            features={[
                {
                    icon: '🛤️',
                    title: 'Declarative Routes',
                    description: 'Define routes with a clean, declarative API. Nested routes and dynamic parameters supported.',
                },
                {
                    icon: '🔒',
                    title: 'Route Guards',
                    description: 'Protect routes with authentication guards, redirects, and data loading hooks.',
                },
                {
                    icon: '⚡',
                    title: 'Lazy Loading',
                    description: 'Code-split your routes automatically for optimal bundle sizes and faster loads.',
                },
                {
                    icon: '🌐',
                    title: 'SSR & Static Hosting',
                    description: 'Full server-side rendering support with seamless hydration. Hash-based routing for static hosts.',
                },
                {
                    icon: '🔗',
                    title: 'Type-Safe Links',
                    description: 'RouterLink component with type-safe paths and automatic active states.',
                },
                {
                    icon: '📍',
                    title: 'Reactive Navigation',
                    description: 'Access route params and query strings as reactive signals.',
                },
            ]}
            codeExample={`import { createRouter, RouterView, RouterLink } from '@sigx/router';

const router = createRouter({
    routes: [
        { path: '/', component: Home },
        { path: '/users/:id', component: UserProfile },
        { 
            path: '/admin',
            component: AdminLayout,
            guard: () => isAuthenticated(),
            children: [
                { path: 'dashboard', component: Dashboard },
            ],
        },
    ],
});

// In your app
<RouterLink to="/users/123">View User</RouterLink>
<RouterView />`}
            docsPath="/router/docs/getting-started"
            apiPath="/router/api"
            githubPath="packages/router"
            prerequisites={[
                { name: 'SignalX Core basics', path: '/core/docs/getting-started' },
                { name: 'Components', path: '/core/docs/components' },
            ]}
        />
    );
});

export default RouterLanding;

export const meta = {
    title: 'SignalX Router - Declarative Routing for SignalX',
    description: 'A powerful, type-safe router with SSR support, route guards, lazy loading, and seamless integration with SignalX.',
    layout: 'package',
};
