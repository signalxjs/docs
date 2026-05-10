/**
 * TiltCard - 3D tilt effect on hover
 * 
 * Creates an interactive card that tilts based on mouse position.
 */

import { component, type Define } from 'sigx';

type TiltCardProps = 
    & Define.Prop<'class', string, false>
    & Define.Prop<'maxTilt', number, false>
    & Define.Prop<'glare', boolean, false>
    & Define.Slot<'default'>;

export const TiltCard = component<TiltCardProps>(({ props, slots, signal }) => {
    const state = signal({
        transform: '',
        glareX: 50,
        glareY: 50
    });
    
    const maxTilt = props.maxTilt ?? 10;
    const showGlare = props.glare ?? true;
    
    const handleMouseMove = (e: MouseEvent) => {
        const card = e.currentTarget as HTMLElement;
        const rect = card.getBoundingClientRect();
        
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = ((y - centerY) / centerY) * -maxTilt;
        const rotateY = ((x - centerX) / centerX) * maxTilt;
        
        state.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        
        // Update glare position
        state.glareX = (x / rect.width) * 100;
        state.glareY = (y / rect.height) * 100;
    };
    
    const handleMouseLeave = () => {
        state.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        state.glareX = 50;
        state.glareY = 50;
    };
    
    return () => (
        <div 
            class={`tilt-card ${props.class ?? ''}`}
            style={{ transform: state.transform }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {slots.default?.()}
            
            {showGlare && (
                <div 
                    class="tilt-card-glare"
                    style={{
                        background: `radial-gradient(circle at ${state.glareX}% ${state.glareY}%, rgba(255,255,255,0.15) 0%, transparent 60%)`,
                    }}
                />
            )}
        </div>
    );
});

export default TiltCard;
