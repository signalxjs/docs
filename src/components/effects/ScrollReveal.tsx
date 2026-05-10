/**
 * ScrollReveal - Animate elements as they enter the viewport
 * 
 * Uses Intersection Observer for performant scroll-triggered animations.
 */

import { component, onMounted, onUnmounted, type Define } from 'sigx';

type ScrollRevealProps = 
    & Define.Prop<'animation', 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'zoom' | 'flip', false>
    & Define.Prop<'delay', number, false>
    & Define.Prop<'duration', number, false>
    & Define.Prop<'threshold', number, false>
    & Define.Prop<'once', boolean, false>
    & Define.Prop<'class', string, false>
    & Define.Slot<'default'>;

export const ScrollReveal = component<ScrollRevealProps>(({ props, slots, signal }) => {
    const state = signal({ isVisible: false });
    let containerRef: HTMLElement | null = null;
    let observer: IntersectionObserver | null = null;
    
    const animation = props.animation ?? 'fade-up';
    const delay = props.delay ?? 0;
    const duration = props.duration ?? 600;
    const threshold = props.threshold ?? 0.1;
    const once = props.once ?? true;
    
    onMounted(() => {
        if (!containerRef) return;
        
        observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        state.isVisible = true;
                        if (once && observer && containerRef) {
                            observer.unobserve(containerRef);
                        }
                    } else if (!once) {
                        state.isVisible = false;
                    }
                });
            },
            { threshold }
        );
        
        observer.observe(containerRef);
    });
    
    onUnmounted(() => {
        if (observer && containerRef) {
            observer.unobserve(containerRef);
            observer.disconnect();
        }
    });
    
    return () => (
        <div 
            ref={(el: HTMLElement) => containerRef = el}
            class={`scroll-reveal scroll-reveal-${animation} ${state.isVisible ? 'scroll-reveal-visible' : ''} ${props.class ?? ''}`}
            style={{
                transitionDelay: `${delay}ms`,
                transitionDuration: `${duration}ms`,
            }}
        >
            {slots.default?.()}
        </div>
    );
});

export default ScrollReveal;
