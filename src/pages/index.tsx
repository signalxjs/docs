/**
 * SignalX Documentation Homepage
 * 
 * This page uses the 'home' layout which provides:
 * - Full-width design without container constraints
 * - Background effects
 * - Navbar and Footer
 * 
 * @layout home
 */

import { component } from 'sigx';
import { HeroSection } from '@/components/home/HeroSection';
import { FeaturesGrid } from '@/components/home/FeaturesGrid';
import { CodeShowcase } from '@/components/home/CodeShowcase';
import { WhatIsSignalXSection } from '@/components/home/WhatIsSignalXSection';
import { CTASection } from '@/components/home/CTASection';

/**
 * Homepage content - layout handles navigation and footer
 */
const HomePage = component(() => {
    return () => (
        <>
            <HeroSection />
            <FeaturesGrid />
            <CodeShowcase />
            <WhatIsSignalXSection />
            <CTASection />
        </>
    );
});

export default HomePage;

/**
 * Page metadata for SSG
 * The layout property tells SSG which layout to wrap this page with
 */
export const meta = {
    title: 'SignalX - The Reactive component Framework',
    description: 'Build blazing-fast web applications with fine-grained reactivity, minimal bundle size, and an intuitive developer experience.',
    layout: 'home',
};
