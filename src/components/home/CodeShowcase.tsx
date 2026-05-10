import { component } from 'sigx';
import { ScrollReveal } from '@/components/effects/ScrollReveal';

// Import pre-highlighted MDX snippets (Shiki runs at build time)
import ReactiveCounter from '@/content/snippets/reactive-counter.mdx';
import ComputedValues from '@/content/snippets/computed-values.mdx';
import ComponentProps from '@/content/snippets/component-props.mdx';
import EffectsLifecycle from '@/content/snippets/effects-lifecycle.mdx';

const codeExamples = [
    {
        title: 'Reactive Counter',
        description: 'Simple state management with signals',
        Component: ReactiveCounter,
    },
    {
        title: 'Computed Values',
        description: 'Derived state that updates automatically',
        Component: ComputedValues,
    },
    {
        title: 'Component Props',
        description: 'Type-safe props with full inference',
        Component: ComponentProps,
    },
    {
        title: 'Effects & Lifecycle',
        description: 'React to changes and manage resources',
        Component: EffectsLifecycle,
    },
];

/**
 * Code showcase with syntax highlighted examples
 */
export const CodeShowcase = component(({ signal }) => {
    const state = signal({ activeTab: 0 });

    return () => (
        <section class="py-24 px-4 bg-base-200/50 relative overflow-hidden">
            {/* Background effect */}
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
            
            <div class="max-w-6xl mx-auto relative z-10">
                {/* Section header */}
                <ScrollReveal animation="fade-up" class="text-center mb-16">
                    <h2 class="text-4xl md:text-5xl font-bold mb-4">
                        Simple & <span class="text-gradient">Intuitive</span>
                    </h2>
                    <p class="text-xl text-base-content/60 max-w-2xl mx-auto">
                        Write less code, accomplish more. SignalX's API is designed to feel natural.
                    </p>
                </ScrollReveal>
                
                {/* Code tabs */}
                <ScrollReveal animation="fade-up" delay={200}>
                    <div class="glass-effect rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-primary/10 transition-shadow duration-500">
                        {/* Tab headers */}
                        <div class="flex flex-wrap border-b border-base-content/10">
                            {codeExamples.map((example, index) => (
                                <button
                                    key={index}
                                    class={`px-6 py-4 text-sm font-medium transition-all duration-300 ${
                                        state.activeTab === index 
                                            ? 'bg-primary/20 text-primary border-b-2 border-primary' 
                                            : 'text-base-content/60 hover:text-base-content hover:bg-base-content/5'
                                    }`}
                                    onClick={() => state.activeTab = index}
                                >
                                    {example.title}
                                </button>
                            ))}
                        </div>
                        
                        {/* Active example */}
                        <div class="p-6 md:p-8">
                            <p class="text-base-content/60 mb-6">
                                {codeExamples[state.activeTab].description}
                            </p>
                            
                            {/* MDX snippet includes complete code-window with Shiki highlighting */}
                            {(() => {
                                const Example = codeExamples[state.activeTab].Component;
                                return <Example />;
                            })()}
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
});
