/**
 * Package Layout
 * 
 * Landing page layout for individual packages (Core, Router, DaisyUI, etc.)
 * Features hero section with accent colors, feature grid, and quick links.
 */

import { component, onMounted } from 'sigx';
import type { LayoutProps, LayoutSlots } from '@sigx/ssg';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { AnimatedGrid } from '@/components/effects/AnimatedGrid';
import { GlowingOrbs } from '@/components/effects/GlowingOrbs';
import { initializeTheme } from '@sigx/daisyui';

export default component<LayoutProps, unknown, LayoutSlots>(({ slots, props }) => {
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
            
            {/* Main content - full width for package landing */}
            <main class="relative">
                {slots.default()}
            </main>
            
            {/* Footer */}
            <Footer />
        </div>
    );
});
