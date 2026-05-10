/**
 * GlowingOrbs - Animated floating orbs with glow effects
 * 
 * Creates ambient floating orbs that add depth and visual interest.
 */

import { component, type Define } from 'sigx';

type GlowingOrbsProps = Define.Prop<'variant', 'hero' | 'section', false>;

export const GlowingOrbs = component<GlowingOrbsProps>(({ props }) => {
    const variant = props.variant ?? 'hero';
    
    return () => (
        <div class="glowing-orbs-container">
            {variant === 'hero' ? (
                <>
                    {/* Large primary orb */}
                    <div class="orb orb-primary orb-1" />
                    {/* Medium secondary orb */}
                    <div class="orb orb-secondary orb-2" />
                    {/* Small accent orb */}
                    <div class="orb orb-accent orb-3" />
                    {/* Extra floating orbs */}
                    <div class="orb orb-primary orb-4" />
                    <div class="orb orb-secondary orb-5" />
                </>
            ) : (
                <>
                    <div class="orb orb-primary orb-section-1" />
                    <div class="orb orb-accent orb-section-2" />
                </>
            )}
        </div>
    );
});

export default GlowingOrbs;
