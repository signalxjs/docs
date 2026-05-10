import { component } from 'sigx';
import { ScrollReveal } from '@/components/effects/ScrollReveal';
import { CountUp } from '@/components/effects/CountUp';

/**
 * Performance highlights section
 */
export const PerformanceSection = component(() => {
    return () => (
        <section class="py-24 px-4 relative overflow-hidden">
            {/* Background effects */}
            <div class="absolute top-0 left-1/3 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
            <div class="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
            
            <div class="max-w-6xl mx-auto relative z-10">
                {/* Section header */}
                <ScrollReveal animation="fade-up" class="text-center mb-16">
                    <h2 class="text-4xl md:text-5xl font-bold mb-4">
                        Blazing <span class="text-gradient">Fast</span>
                    </h2>
                    <p class="text-xl text-base-content/60 max-w-2xl mx-auto">
                        Tiny bundles, fine-grained updates, zero virtual DOM overhead.
                    </p>
                </ScrollReveal>
                
                {/* Stats row with CountUp */}
                <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <ScrollReveal animation="fade-up" delay={100}>
                        <div class="text-center glass-effect rounded-xl p-6 stat-card hover:scale-105 transition-transform">
                            <div class="text-4xl font-bold text-gradient mb-2">
                                <CountUp end={2.5} decimals={1} suffix="KB" />
                            </div>
                            <div class="text-base-content/60">Core Bundle</div>
                        </div>
                    </ScrollReveal>
                    <ScrollReveal animation="fade-up" delay={200}>
                        <div class="text-center glass-effect rounded-xl p-6 stat-card hover:scale-105 transition-transform">
                            <div class="text-4xl font-bold text-gradient mb-2">
                                <CountUp end={0} suffix="ms" />
                            </div>
                            <div class="text-base-content/60">Virtual DOM</div>
                        </div>
                    </ScrollReveal>
                    <ScrollReveal animation="fade-up" delay={300}>
                        <div class="text-center glass-effect rounded-xl p-6 stat-card hover:scale-105 transition-transform">
                            <div class="text-4xl font-bold text-gradient mb-2">
                                <CountUp end={100} suffix="%" />
                            </div>
                            <div class="text-base-content/60">TypeScript</div>
                        </div>
                    </ScrollReveal>
                    <ScrollReveal animation="fade-up" delay={400}>
                        <div class="text-center glass-effect rounded-xl p-6 stat-card hover:scale-105 transition-transform">
                            <div class="text-4xl font-bold text-gradient mb-2">∞</div>
                            <div class="text-base-content/60">Possibilities</div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
});
