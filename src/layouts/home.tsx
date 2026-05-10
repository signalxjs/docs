/**
 * Home Layout
 * 
 * A full-width, immersive layout for landing pages.
 * No container constraints - perfect for hero sections and edge-to-edge designs.
 */

import { component, onMounted } from 'sigx';
import type { LayoutProps, LayoutSlots } from '@sigx/ssg';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { AnimatedGrid } from '@/components/effects/AnimatedGrid';
import { GlowingOrbs } from '@/components/effects/GlowingOrbs';
import { initializeTheme } from '@sigx/daisyui';

export default component<LayoutProps, unknown, LayoutSlots>(({ slots, props }) => {
    // Initialize theme from localStorage or system preference on mount
    onMounted(() => {
        initializeTheme({ defaultTheme: 'dark' });
    });

    return () => (
        <div class="min-h-screen bg-base-100 overflow-x-hidden">
            {/* Animated grid background */}
            <AnimatedGrid />
            
            {/* Glowing orbs for ambient lighting */}
            <GlowingOrbs variant="hero" />
            
            {/* Background dots overlay */}
            <div class="fixed inset-0 bg-dots opacity-20 pointer-events-none" />
            
            {/* Navigation */}
            <Navbar />
            
            {/* Main content - full width, no container */}
            <main class="relative">
                {slots.default()}
            </main>
            
            {/* Footer */}
            <Footer />
        </div>
    );
});
