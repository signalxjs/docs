/**
 * TiltCard - 3D tilt effect on hover
 * 
 * Creates an interactive card that tilts based on mouse position.
 */

import { component, onMounted, onUnmounted, type Define } from 'sigx';

type TiltCardProps =
    & Define.Prop<'class', string, false>
    & Define.Prop<'maxTilt', number, false>
    & Define.Prop<'glare', boolean, false>
    & Define.Slot<'default'>;

/**
 * Drive the tilt + glare from direct DOM writes instead of signal-backed
 * style props. Reactive style updates aren't reliably flowing through
 * sigx's hydration on this site, so the SSR'd card would render with
 * `transform: ""` and never update.
 */
function startTiltCard(card: HTMLElement, glare: HTMLElement | null, maxTilt: number): () => void {
    const handleMouseMove = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -maxTilt;
        const rotateY = ((x - centerX) / centerX) * maxTilt;
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        if (glare) {
            const gx = (x / rect.width) * 100;
            const gy = (y / rect.height) * 100;
            glare.style.background = `radial-gradient(circle at ${gx}% ${gy}%, rgba(255,255,255,0.15) 0%, transparent 60%)`;
        }
    };

    const handleMouseLeave = () => {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        if (glare) {
            glare.style.background = 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.15) 0%, transparent 60%)';
        }
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
        card.removeEventListener('mousemove', handleMouseMove);
        card.removeEventListener('mouseleave', handleMouseLeave);
    };
}

if (typeof window !== 'undefined') {
    const bootstrapAll = () => {
        document.querySelectorAll<HTMLElement>('.tilt-card').forEach((card) => {
            if (card.dataset.tiltStarted === '1') return;
            card.dataset.tiltStarted = '1';
            const maxTilt = Number(card.dataset.tiltMax ?? 10);
            const glare = card.querySelector<HTMLElement>('.tilt-card-glare');
            startTiltCard(card, glare, maxTilt);
        });
    };
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', bootstrapAll, { once: true });
    } else {
        bootstrapAll();
    }
}

export const TiltCard = component<TiltCardProps>(({ props, slots }) => {
    const maxTilt = props.maxTilt ?? 10;
    const showGlare = props.glare ?? true;

    let cardEl: HTMLElement | null = null;
    let stop: (() => void) | undefined;

    onMounted(() => {
        if (!cardEl || cardEl.dataset.tiltStarted === '1') return;
        cardEl.dataset.tiltStarted = '1';
        const glare = cardEl.querySelector<HTMLElement>('.tilt-card-glare');
        stop = startTiltCard(cardEl, glare, maxTilt);
    });

    onUnmounted(() => {
        stop?.();
    });

    return () => (
        <div
            class={`tilt-card ${props.class ?? ''}`}
            ref={(el: HTMLElement) => { cardEl = el; }}
            data-tilt-max={String(maxTilt)}
        >
            {slots.default?.()}

            {showGlare && (
                <div
                    class="tilt-card-glare"
                    style={{
                        background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.15) 0%, transparent 60%)',
                    }}
                />
            )}
        </div>
    );
});

export default TiltCard;
