/**
 * DaisyUI Package Landing Page
 * 
 * @layout package
 */

import { component } from 'sigx';
import { PackageLanding } from '@/components/PackageLanding';

const DaisyUILanding = component(() => {
    return () => (
        <PackageLanding
            name="DaisyUI"
            npmName="@sigx/daisyui"
            tagline="Beautiful UI Components for SignalX"
            description="Pre-built, accessible UI components powered by DaisyUI and Tailwind CSS. Build stunning interfaces with zero configuration and full theme support."
            accentColor="text-purple-500"
            gradientFrom="from-purple-500"
            gradientTo="to-pink-400"
            features={[
                {
                    icon: '🎨',
                    title: '30+ Themes',
                    description: 'Switch between light, dark, and 30+ other themes with a single line of code.',
                },
                {
                    icon: '🧱',
                    title: 'Rich Component Library',
                    description: 'Buttons, modals, cards, forms, navigation, and more - all ready to use.',
                },
                {
                    icon: '♿',
                    title: 'Accessible',
                    description: 'Built with accessibility in mind. ARIA attributes and keyboard navigation included.',
                },
                {
                    icon: '⚡',
                    title: 'Reactive Integration',
                    description: 'Components integrate seamlessly with SignalX signals and reactivity system.',
                },
                {
                    icon: '🎯',
                    title: 'Tailwind Powered',
                    description: 'Built on Tailwind CSS for easy customization and consistent styling.',
                },
                {
                    icon: '📱',
                    title: 'Responsive',
                    description: 'Mobile-first design with responsive variants for all screen sizes.',
                },
            ]}
            codeExample={`import { component, signal } from 'sigx';
import { Button, Modal, ThemeToggle } from '@sigx/daisyui';

const App = component(() => {
    const isOpen = signal(false);

    return () => (
        <div class="p-8">
            <ThemeToggle />
            
            <Button 
                variant="primary" 
                onClick={() => isOpen.value = true}
            >
                Open Modal
            </Button>

            <Modal 
                isOpen={isOpen.value} 
                onClose={() => isOpen.value = false}
            >
                <h2>Hello DaisyUI!</h2>
                <p>Beautiful components, zero effort.</p>
            </Modal>
        </div>
    );
});`}
            docsPath="/daisyui/docs/getting-started"
            apiPath="/daisyui/api"
            githubPath="packages/daisyui"
            prerequisites={[
                { name: 'SignalX Core basics', path: '/core/docs/getting-started' },
                { name: 'Components', path: '/core/docs/components' },
            ]}
        />
    );
});

export default DaisyUILanding;

export const meta = {
    title: 'SignalX DaisyUI - Beautiful UI Components',
    description: 'Pre-built, accessible UI components powered by DaisyUI and Tailwind CSS. Build stunning interfaces with zero configuration.',
    layout: 'package',
};
