/**
 * AnimatedGrid - A Vercel/Linear style animated grid background
 * 
 * Creates an animated grid with gradient beams that flow across the surface.
 * Uses pure CSS animations for performance.
 */

import { component, type Define } from 'sigx';

type AnimatedGridProps = Define.Prop<'class', string, false>;

export const AnimatedGrid = component<AnimatedGridProps>(({ props }) => {
    return () => (
        <div class={`animated-grid-container ${props.class ?? ''}`}>
            {/* Base grid pattern */}
            <div class="animated-grid" />
            
            {/* Animated gradient beams */}
            <div class="grid-beam grid-beam-1" />
            <div class="grid-beam grid-beam-2" />
            <div class="grid-beam grid-beam-3" />
            
            {/* Radial fade at edges */}
            <div class="grid-fade" />
        </div>
    );
});

export default AnimatedGrid;
