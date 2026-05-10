/**
 * Package Landing Component
 * 
 * Reusable landing page component for package documentation.
 * Features hero with install command, feature grid, code preview, and quick links.
 */

import { component } from 'sigx';
import { RouterLink } from '@sigx/router';

export type PackageFeature = {
    icon: string;
    title: string;
    description: string;
};

export type PackageLandingProps = {
    /** Package name (e.g., "Core", "Router", "DaisyUI") */
    name: string;
    /** Package npm name (e.g., "@sigx/router") */
    npmName: string;
    /** Short tagline */
    tagline: string;
    /** Longer description */
    description: string;
    /** Accent color class (e.g., "text-blue-500", "text-green-500", "text-purple-500") */
    accentColor: string;
    /** Accent gradient classes for hero */
    gradientFrom: string;
    gradientTo: string;
    /** Feature list */
    features: PackageFeature[];
    /** Code example to showcase */
    codeExample: string;
    /** Path to docs (e.g., "/core/docs/getting-started") */
    docsPath: string;
    /** Path to API reference (e.g., "/core/api") */
    apiPath: string;
    /** GitHub path (e.g., "packages/runtime-core") */
    githubPath?: string;
    /** Optional prerequisites */
    prerequisites?: { name: string; path: string }[];
};

export const PackageLanding = component<PackageLandingProps>(({ props }) => {
    return () => (
        <div class="relative">
            {/* Hero Section */}
            <section class="relative pt-24 pb-20 px-6">
                <div class="max-w-5xl mx-auto text-center">
                    {/* Package badge */}
                    <div class={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-base-200/50 border border-base-content/10 mb-8`}>
                        <span class={`w-2 h-2 rounded-full ${props.accentColor.replace('text-', 'bg-')}`} />
                        <span class="text-sm font-medium text-base-content/70">{props.npmName}</span>
                    </div>
                    
                    {/* Title with gradient */}
                    <h1 class="text-5xl md:text-7xl font-bold mb-6">
                        <span class={`bg-gradient-to-r ${props.gradientFrom} ${props.gradientTo} bg-clip-text text-transparent`}>
                            {props.name}
                        </span>
                    </h1>
                    
                    {/* Tagline */}
                    <p class="text-xl md:text-2xl text-base-content/70 mb-4">
                        {props.tagline}
                    </p>
                    
                    {/* Description */}
                    <p class="text-lg text-base-content/60 max-w-2xl mx-auto mb-10">
                        {props.description}
                    </p>
                    
                    {/* Install command */}
                    <div class="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-base-200/80 border border-base-content/10 font-mono text-sm mb-10">
                        <span class="text-base-content/50">$</span>
                        <span class="text-base-content">pnpm add {props.npmName}</span>
                        <button 
                            class="btn btn-ghost btn-xs"
                            onClick={() => navigator.clipboard.writeText(`pnpm add ${props.npmName}`)}
                        >
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                        </button>
                    </div>
                    
                    {/* Quick links */}
                    <div class="flex flex-wrap items-center justify-center gap-4">
                        <RouterLink 
                            to={props.docsPath}
                            class={`btn btn-lg ${props.accentColor.replace('text-', 'btn-')?.replace('-500', '') || 'btn-primary'}`}
                        >
                            Get Started
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </RouterLink>
                        <RouterLink 
                            to={props.apiPath}
                            class="btn btn-lg btn-outline"
                        >
                            API Reference
                        </RouterLink>
                        {props.githubPath && (
                            <a 
                                href={`https://github.com/signalxjs/core/tree/main/${props.githubPath}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                class="btn btn-lg btn-ghost"
                            >
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                                </svg>
                                GitHub
                            </a>
                        )}
                    </div>
                </div>
            </section>

            {/* Prerequisites callout */}
            {props.prerequisites && props.prerequisites.length > 0 && (
                <section class="px-6 pb-12">
                    <div class="max-w-3xl mx-auto">
                        <div class="flex items-start gap-4 p-4 rounded-xl bg-info/10 border border-info/20">
                            <svg class="w-6 h-6 text-info shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <div>
                                <p class="font-medium text-info">Prerequisites</p>
                                <p class="text-sm text-base-content/70 mt-1">
                                    Before diving in, make sure you're familiar with:{' '}
                                    {props.prerequisites.map((prereq, i) => (
                                        <>
                                            <RouterLink to={prereq.path} class="link link-info">{prereq.name}</RouterLink>
                                            {i < props.prerequisites!.length - 1 && ', '}
                                        </>
                                    ))}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Features Grid */}
            <section class="px-6 py-20 bg-base-200/30">
                <div class="max-w-6xl mx-auto">
                    <h2 class="text-3xl font-bold text-center mb-12">Features</h2>
                    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {props.features.map((feature) => (
                            <div class="p-6 rounded-2xl bg-base-100/50 border border-base-content/10 hover:border-base-content/20 transition-colors">
                                <div class={`text-3xl mb-4`}>{feature.icon}</div>
                                <h3 class="text-lg font-semibold mb-2">{feature.title}</h3>
                                <p class="text-base-content/60">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Code Example */}
            <section class="px-6 py-20">
                <div class="max-w-4xl mx-auto">
                    <h2 class="text-3xl font-bold text-center mb-4">Quick Example</h2>
                    <p class="text-center text-base-content/60 mb-10">
                        See how easy it is to get started
                    </p>
                    <div class="rounded-2xl overflow-hidden border border-base-content/10 bg-base-200/50">
                        <div class="flex items-center gap-2 px-4 py-3 bg-base-300/50 border-b border-base-content/10">
                            <span class="w-3 h-3 rounded-full bg-error/60" />
                            <span class="w-3 h-3 rounded-full bg-warning/60" />
                            <span class="w-3 h-3 rounded-full bg-success/60" />
                            <span class="ml-auto text-xs text-base-content/40 font-mono">example.tsx</span>
                        </div>
                        <pre class="p-6 overflow-x-auto text-sm">
                            <code class="language-tsx">{props.codeExample}</code>
                        </pre>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section class="px-6 py-20 bg-base-200/30">
                <div class="max-w-3xl mx-auto text-center">
                    <h2 class="text-3xl font-bold mb-4">Ready to get started?</h2>
                    <p class="text-base-content/60 mb-8">
                        Check out the documentation to learn more about {props.name}.
                    </p>
                    <RouterLink 
                        to={props.docsPath}
                        class={`btn btn-lg ${props.accentColor.replace('text-', 'btn-')?.replace('-500', '') || 'btn-primary'}`}
                    >
                        Read the Docs
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </RouterLink>
                </div>
            </section>
        </div>
    );
});
