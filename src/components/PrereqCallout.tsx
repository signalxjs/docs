/**
 * Prerequisite Callout Component
 * 
 * Used in documentation pages to link to prerequisite knowledge
 * from other packages (e.g., "Understand Core signals first").
 */

import { component } from 'sigx';
import { RouterLink } from '@sigx/router';

export type PrereqCalloutProps = {
    /** Title for the callout (default: "Prerequisites") */
    title?: string;
    /** List of prerequisites with name and link */
    items: { name: string; path: string }[];
};

export const PrereqCallout = component<PrereqCalloutProps>(({ props }) => {
    return () => (
        <div class="not-prose flex items-start gap-4 p-4 my-6 rounded-xl bg-info/10 border border-info/20">
            <svg class="w-6 h-6 text-info shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
                <p class="font-medium text-info">{props.title || 'Prerequisites'}</p>
                <p class="text-sm text-base-content/70 mt-1">
                    Before continuing, make sure you're familiar with:{' '}
                    {props.items.map((item, i) => (
                        <>
                            <RouterLink to={item.path} class="link link-info">{item.name}</RouterLink>
                            {i < props.items.length - 1 && ', '}
                        </>
                    ))}
                </p>
            </div>
        </div>
    );
});
