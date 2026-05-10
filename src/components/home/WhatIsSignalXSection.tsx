import { component } from 'sigx';
import { Card } from '@sigx/daisyui';
import { TiltCard } from '@/components/effects/TiltCard';
import { ScrollReveal } from '@/components/effects/ScrollReveal';

const concepts = [
    {
        icon: '⚡',
        title: 'Signals',
        description: 'Fine-grained reactive state that automatically tracks dependencies. When a signal changes, only the parts that depend on it update — nothing more.',
        color: 'primary',
    },
    {
        icon: '🧩',
        title: 'Components',
        description: 'A simple setup function that returns a render function. Props, slots, events, and lifecycle hooks — all type-safe and intuitive.',
        color: 'info',
    },
    {
        icon: '🎯',
        title: 'TSX',
        description: 'Write your templates in TypeScript with full type checking, IDE autocomplete, and compile-time safety. No template strings, no magic.',
        color: 'accent',
    },
    {
        icon: '🔒',
        title: 'Zero External Dependencies',
        description: 'The core framework has no third-party dependencies. Nothing extra to audit, nothing to break — just SignalX.',
        color: 'success',
    },
    {
        icon: '⚙️',
        title: 'Vite 8 Powered',
        description: 'First-class Vite 8 integration for development. Lightning-fast HMR, optimized builds, and native TSX transforms out of the box.',
        color: 'warning',
    },
    {
        icon: '🌐',
        title: 'Multi-Platform',
        description: 'The same component model works for web, terminal, and server. Build for the DOM, TUI, SSR, or SSG with one API.',
        color: 'secondary',
    },
    {
        icon: '🪶',
        title: 'Tiny Footprint',
        description: 'Minimal core with tree-shakeable packages. Only ship what you use — keep your bundles small and your apps fast.',
        color: 'primary',
    },
];

const colorClasses: Record<string, { bg: string; border: string; glow: string; iconBg: string }> = {
    primary: { bg: 'bg-primary/10', border: 'border-primary/30', glow: 'hover:shadow-primary/30', iconBg: 'bg-primary/20' },
    secondary: { bg: 'bg-secondary/10', border: 'border-secondary/30', glow: 'hover:shadow-secondary/30', iconBg: 'bg-secondary/20' },
    accent: { bg: 'bg-accent/10', border: 'border-accent/30', glow: 'hover:shadow-accent/30', iconBg: 'bg-accent/20' },
    info: { bg: 'bg-info/10', border: 'border-info/30', glow: 'hover:shadow-info/30', iconBg: 'bg-info/20' },
    success: { bg: 'bg-success/10', border: 'border-success/30', glow: 'hover:shadow-success/30', iconBg: 'bg-success/20' },
    warning: { bg: 'bg-warning/10', border: 'border-warning/30', glow: 'hover:shadow-warning/30', iconBg: 'bg-warning/20' },
};

/**
 * "What is SignalX?" section — explains core concepts without framework comparisons
 */
export const WhatIsSignalXSection = component(() => {
    return () => (
        <section class="py-24 px-4 relative overflow-hidden">
            {/* Background effects */}
            <div class="absolute top-0 left-1/3 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
            <div class="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

            <div class="max-w-6xl mx-auto relative z-10">
                {/* Section header */}
                <ScrollReveal animation="fade-up" class="text-center mb-16">
                    <h2 class="text-4xl md:text-5xl font-bold mb-4">
                        What is <span class="text-gradient">SignalX</span>?
                    </h2>
                    <p class="text-xl text-base-content/60 max-w-2xl mx-auto">
                        A reactive component framework built on signals, TSX, and TypeScript — with zero external dependencies.
                    </p>
                </ScrollReveal>

                {/* Concept cards */}
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {concepts.map((concept, index) => {
                        const colors = colorClasses[concept.color];
                        return (
                            <ScrollReveal
                                key={index}
                                animation="fade-up"
                                delay={index * 100}
                            >
                                <TiltCard class={`h-full ${colors.bg} border ${colors.border} ${colors.glow} rounded-2xl hover:shadow-2xl transition-shadow duration-300`}>
                                    <Card
                                        class="h-full bg-transparent"
                                        shadow={false}
                                    >
                                        <Card.Body class="p-6">
                                            <div class={`w-14 h-14 ${colors.iconBg} rounded-xl flex items-center justify-center mb-4`}>
                                                <span class="text-3xl">{concept.icon}</span>
                                            </div>
                                            <h3 class="text-xl font-bold mb-3">{concept.title}</h3>
                                            <p class="text-base-content/70 leading-relaxed">{concept.description}</p>
                                        </Card.Body>
                                    </Card>
                                </TiltCard>
                            </ScrollReveal>
                        );
                    })}
                </div>
            </div>
        </section>
    );
});
