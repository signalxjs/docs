/**
 * Theme Generator - Interactive DaisyUI Theme Configurator
 * 
 * @layout docs
 */

import { component, signal } from 'sigx';
import {
    ThemeConfigurator,
    DEFAULT_THEME_CONFIG,
    cloneThemeConfig,
} from '@sigx/daisyui';
import type { ThemeConfigData } from '@sigx/daisyui';

const ThemeGeneratorPage = component(() => {
    const config = signal<ThemeConfigData>(cloneThemeConfig(DEFAULT_THEME_CONFIG));

    return () => (
        <div class="not-prose -mx-6 lg:-mx-12">
            <ThemeConfigurator
                config={config}
                onChange={(next) => config.$set(next)}
                persistKey="sigx-docs-theme-config"
            />
        </div>
    );
});

export default ThemeGeneratorPage;

export const meta = {
    title: 'Theme Generator - DaisyUI',
    description: 'Interactive theme generator for DaisyUI. Customize colors, radius, effects, sizes, and more with live preview.',
    layout: 'docs',
    category: 'Core Concepts',
    order: 35,
};
