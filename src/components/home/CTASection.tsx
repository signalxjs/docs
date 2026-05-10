import { component } from 'sigx';
import { Button } from '@sigx/daisyui';
import { ScrollReveal } from '@/components/effects/ScrollReveal';

/**
 * Call to action section
 */
export const CTASection = component(() => {
    return () => (
        <section class="py-24 px-4 relative overflow-hidden">
            {/* Enhanced gradient background */}
            <div class="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10" />
            <div class="absolute inset-0 bg-dots opacity-20" />
            
            {/* Animated glow orbs */}
            <div class="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float-1 pointer-events-none" />
            <div class="absolute bottom-1/4 right-1/4 w-48 h-48 bg-secondary/20 rounded-full blur-3xl animate-float-2 pointer-events-none" />
            
            <div class="max-w-4xl mx-auto text-center relative z-10">
                <ScrollReveal animation="zoom">
                    <h2 class="text-4xl md:text-6xl font-bold mb-6">
                        Ready to <span class="text-gradient">Build</span>?
                    </h2>
                </ScrollReveal>
                
                <ScrollReveal animation="fade-up" delay={100}>
                    <p class="text-xl text-base-content/60 mb-10 max-w-2xl mx-auto">
                        Start building faster, lighter web applications with SignalX.
                    </p>
                </ScrollReveal>
                
                <ScrollReveal animation="fade-up" delay={200}>
                    <div class="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button 
                            variant="primary" 
                            size="lg" 
                            class="px-10 py-4 text-lg font-semibold glow-primary-intense hover:scale-105 transition-transform pulse-ring"
                        >
                            Start Building
                            <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </Button>
                        
                        <Button 
                            variant="ghost" 
                            size="lg" 
                            class="px-10 py-4 text-lg font-semibold border border-base-content/20 hover:bg-base-content/10 hover:scale-105 transition-all"
                        >
                            Read the Docs
                        </Button>
                    </div>
                </ScrollReveal>
                
                {/* Social proof with animations */}
                <ScrollReveal animation="fade-up" delay={300}>
                    <div class="mt-16 flex flex-wrap justify-center items-center gap-8 text-base-content/50">
                        <div class="flex items-center gap-2 hover:text-primary transition-colors">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                            </svg>
                            <span>Open Source</span>
                        </div>
                        <div class="flex items-center gap-2 hover:text-success transition-colors">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                            </svg>
                            <span>TypeScript First</span>
                        </div>
                        <div class="flex items-center gap-2 hover:text-accent transition-colors">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z" />
                            </svg>
                            <span>MIT Licensed</span>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
});
