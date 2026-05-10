import { component } from 'sigx';
import { Card } from '@sigx/daisyui';
import { TiltCard } from '@/components/effects/TiltCard';
import { ScrollReveal } from '@/components/effects/ScrollReveal';

const features = [
    {
        icon: '⚡',
        title: 'Fine-Grained Reactivity',
        description: 'Signals track exactly what changed and trigger only the updates needed. Pure, surgical reactivity.',
        color: 'primary',
    },
    {
        icon: '🪶',
        title: 'Tiny Bundle Size',
        description: 'Lightweight core with tree-shakeable packages. Ship only what you use, load faster, score better.',
        color: 'secondary',
    },
    {
        icon: '🎯',
        title: 'TypeScript First',
        description: 'Full type inference, IDE autocomplete, and compile-time safety. Built for TypeScript from day one.',
        color: 'accent',
    },
    {
        icon: '🧩',
        title: 'Component Model',
        description: 'Intuitive component API with props, slots, and events. Feels familiar, works better.',
        color: 'info',
    },
    {
        icon: '🔌',
        title: 'Vite Powered',
        description: 'First-class Vite integration with HMR, JSX transform, and optimized builds out of the box.',
        color: 'success',
    },
    {
        icon: '🌐',
        title: 'SSR & SSG Ready',
        description: 'Server-side rendering and static generation with streaming support. SEO-friendly by default.',
        color: 'warning',
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
 * Features grid showcasing SignalX capabilities
 */
export const FeaturesGrid = component(() => {
    return () => (
        <section class="py-24 px-4 relative overflow-hidden">
            {/* Section background effects */}
            <div class="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
            <div class="absolute bottom-1/4 left-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />
            
            <div class="max-w-6xl mx-auto relative z-10">
                {/* Section header */}
                <ScrollReveal animation="fade-up" class="text-center mb-16">
                    <h2 class="text-4xl md:text-5xl font-bold mb-4">
                        Why <span class="text-gradient">SignalX</span>?
                    </h2>
                    <p class="text-xl text-base-content/60 max-w-2xl mx-auto">
                        Built for modern web development with performance and developer experience at its core.
                    </p>
                </ScrollReveal>
                
                {/* Features grid with tilt cards */}
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => {
                        const colors = colorClasses[feature.color];
                        return (
                            <ScrollReveal 
                                key={index}
                                animation="fade-up" 
                                delay={index * 100}
                            >
                                <TiltCard class={`h-full ${colors.bg} border ${colors.border} ${colors.glow} rounded-2xl hover:shadow-2xl transition-shadow duration-300`}>
                                    <Card 
                                        class="h-full bg-transparent feature-card"
                                        shadow={false}
                                    >
                                        <Card.Body class="p-6">
                                            {/* Icon with enhanced background */}
                                            <div class={`w-14 h-14 ${colors.iconBg} rounded-xl flex items-center justify-center mb-4`}>
                                                <span class="text-3xl">{feature.icon}</span>
                                            </div>
                                            <h3 class="text-xl font-bold mb-3">{feature.title}</h3>
                                            <p class="text-base-content/70 leading-relaxed">{feature.description}</p>
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
