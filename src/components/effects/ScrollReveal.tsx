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
    // Start visible so SSR-rendered content is shown immediately. We only
    // hide-and-animate elements that are still below the fold when the
    // browser first sees them; above-the-fold content stays visible (no
    // FOUC, no dependence on the IntersectionObserver firing on time).
    const state = signal({ isVisible: true });
    let containerRef: HTMLElement | null = null;
    let observer: IntersectionObserver | null = null;

    const animation = props.animation ?? 'fade-up';
    const delay = props.delay ?? 0;
    const duration = props.duration ?? 600;
    const threshold = props.threshold ?? 0.1;
    const once = props.once ?? true;

    onMounted(() => {
        if (!containerRef) return;

        // Above-the-fold? Skip the observer — the content is already
        // visible from the SSR render and we don't want to flash it out.
        const rect = containerRef.getBoundingClientRect();
        const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
        if (rect.top < viewportHeight) {
            return;
        }

        // Below the fold — hide now, then fade in when scrolled into view.
        state.isVisible = false;

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
