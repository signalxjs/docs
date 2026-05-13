import { component } from 'sigx';
import { Card, Badge } from '@sigx/daisyui';
import { ScrollReveal } from '@/components/effects/ScrollReveal';
import { TiltCard } from '@/components/effects/TiltCard';

const packages = [
    {
        name: 'sigx',
        description: 'Core runtime with signals, effects, and component model',
        icon: '⚛️',
        status: 'stable',
    },
    {
        name: '@sigx/router',
        description: 'Full-featured router with SSR support and navigation guards',
        icon: '🧭',
        status: 'stable',
    },
    {
        name: '@sigx/store',
        description: 'Centralized state management for complex applications',
        icon: '📦',
        status: 'stable',
    },
    {
        name: '@sigx/daisyui',
        description: 'Beautiful, accessible UI components with DaisyUI styling',
        icon: '🎨',
        status: 'stable',
    },
    {
        name: '@sigx/ssg',
        description: 'Static site generator with MDX and file-based routing',
        icon: '📄',
        status: 'beta',
    },
    {
        name: '@sigx/server-renderer',
        description: 'Server-side rendering with streaming support',
        icon: '🖥️',
        status: 'stable',
    },
    {
        name: '@sigx/vite',
        description: 'Vite plugin with HMR and optimized builds',
        icon: '⚡',
        status: 'stable',
    },
    {
        name: '@sigx/terminal',
        description: 'Build terminal UIs with SignalX components',
        icon: '💻',
        status: 'experimental',
    },
];

const statusColors: Record<string, string> = {
    stable: 'badge-success',
    beta: 'badge-warning',
    experimental: 'badge-info',
};

/**
 * Ecosystem overview section
 */
export const EcosystemSection = component(() => {
    return () => (
        <section class="py-24 px-4 bg-base-200/50 relative overflow-hidden">
            {/* Background effects */}
            <div class="absolute top-1/2 left-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />
            <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
            
            <div class="max-w-6xl mx-auto relative z-10">
                {/* Section header */}
                <ScrollReveal animation="fade-up" class="text-center mb-16">
                    <h2 class="text-4xl md:text-5xl font-bold mb-4">
                        Complete <span class="text-gradient">Ecosystem</span>
                    </h2>
                    <p class="text-xl text-base-content/60 max-w-2xl mx-auto">
                        Everything you need to build modern web applications, from routing to rendering.
                    </p>
                </ScrollReveal>
                
                {/* Package grid */}
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {packages.map((pkg, index) => (
                        <ScrollReveal 
                            key={index}
                            animation="fade-up"
                            delay={index * 50}
                        >
                            <TiltCard 
                                maxTilt={8}
                                class="h-full bg-base-100 border border-base-content/10 hover:border-primary/50 rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
                            >
                                <Card 
                                    class="h-full bg-transparent"
                                    shadow={false}
                                >
                                    <Card.Body class="p-5">
                                        <div class="flex items-start justify-between mb-3">
                                            <span class="text-2xl">{pkg.icon}</span>
                                            <Badge class={`text-xs ${statusColors[pkg.status]}`}>
                                                {pkg.status}
                                            </Badge>
                                        </div>
                                        <h3 class="font-mono text-sm font-semibold text-primary mb-2">
                                            {pkg.name}
                                        </h3>
                                        <p class="text-sm text-base-content/60 leading-relaxed">
                                            {pkg.description}
                                        </p>
                                    </Card.Body>
                                </Card>
                            </TiltCard>
                        </ScrollReveal>
                    ))}
                </div>
                
                {/* Create SignalX CTA */}
                <ScrollReveal animation="fade-up" delay={400}>
                    <div class="mt-12 text-center">
                        <p class="text-base-content/60 mb-4">
                            Get started with the full stack in seconds
                        </p>
                        <code class="inline-block gradient-border glass-effect px-6 py-3 rounded-lg font-mono text-lg hover:scale-105 transition-transform cursor-pointer">
                            <span class="text-accent">npm</span> create @sigx@latest my-app
                        </code>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
});
