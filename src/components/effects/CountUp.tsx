/**
 * CountUp - Animated number counter
 * 
 * Animates from 0 to a target number when visible.
 */

import { component, onMounted, onUnmounted, type Define } from 'sigx';

type CountUpProps = 
    & Define.Prop<'end', number>
    & Define.Prop<'start', number, false>
    & Define.Prop<'duration', number, false>
    & Define.Prop<'suffix', string, false>
    & Define.Prop<'prefix', string, false>
    & Define.Prop<'decimals', number, false>
    & Define.Prop<'class', string, false>;

export const CountUp = component<CountUpProps>(({ props, signal }) => {
    const state = signal({
        currentValue: props.start ?? 0,
        isVisible: false
    });
    let containerRef: HTMLElement | null = null;
    let observer: IntersectionObserver | null = null;
    let animationFrame: number | null = null;
    
    const duration = props.duration ?? 2000;
    const decimals = props.decimals ?? 0;
    
    const animate = () => {
        const start = props.start ?? 0;
        const end = props.end ?? 0;
        const startTime = performance.now();
        
        const step = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function (ease-out-expo)
            const easeOutExpo = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            
            state.currentValue = start + (end - start) * easeOutExpo;
            
            if (progress < 1) {
                animationFrame = requestAnimationFrame(step);
            }
        };
        
        animationFrame = requestAnimationFrame(step);
    };
    
    onMounted(() => {
        if (!containerRef) return;
        
        observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !state.isVisible) {
                        state.isVisible = true;
                        animate();
                    }
                });
            },
            { threshold: 0.3 }
        );
        
        observer.observe(containerRef);
    });
    
    onUnmounted(() => {
        if (observer && containerRef) {
            observer.unobserve(containerRef);
            observer.disconnect();
        }
        if (animationFrame) {
            cancelAnimationFrame(animationFrame);
        }
    });
    
    return () => (
        <span 
            ref={(el: HTMLElement) => containerRef = el}
            class={`count-up ${props.class ?? ''}`}
        >
            {props.prefix ?? ''}
            {state.currentValue.toFixed(decimals)}
            {props.suffix ?? ''}
        </span>
    );
});

export default CountUp;
