/**
 * Typewriter - Animated text typing effect
 * 
 * Cycles through an array of words with a typing animation.
 */

import { component, onMounted, onUnmounted, type Define } from 'sigx';

/**
 * Sigx's hydration on this site isn't reliably firing `onMounted` for the
 * Typewriter (the SSR'd `<span class="typewriter-text"></span>` stays
 * empty). To make sure the effect runs regardless, we also bootstrap any
 * typewriter found in the DOM as soon as this module is imported on the
 * client. The component still registers an onMounted; whichever path runs
 * first wins, the other becomes a no-op because the element gets the
 * `data-typewriter-started` flag the first time we touch it.
 */
const DEFAULT_WORDS = ['Reactive', 'Blazing Fast', 'Lightweight', 'Modern', 'Powerful'];

function startTypewriter(
    root: HTMLElement,
    words: string[],
    typingSpeed: number,
    deletingSpeed: number,
    pauseDuration: number,
): (() => void) | undefined {
    if (root.dataset.typewriterStarted === '1') return;
    const textEl = root.querySelector<HTMLElement>('.typewriter-text');
    if (!textEl) return;
    root.dataset.typewriterStarted = '1';

    let timeoutId: ReturnType<typeof setTimeout> | null = null;
    let wordIndex = 0;
    let displayText = '';
    let isDeleting = false;

    const tick = () => {
        if (words.length === 0) return;
        const currentWord = words[wordIndex];
        if (isDeleting) {
            displayText = currentWord.substring(0, displayText.length - 1);
            textEl.textContent = displayText;
            if (displayText === '') {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                timeoutId = setTimeout(tick, typingSpeed);
            } else {
                timeoutId = setTimeout(tick, deletingSpeed);
            }
        } else {
            displayText = currentWord.substring(0, displayText.length + 1);
            textEl.textContent = displayText;
            if (displayText === currentWord) {
                timeoutId = setTimeout(() => {
                    isDeleting = true;
                    tick();
                }, pauseDuration);
            } else {
                timeoutId = setTimeout(tick, typingSpeed);
            }
        }
    };

    tick();

    return () => {
        if (timeoutId) clearTimeout(timeoutId);
        root.dataset.typewriterStarted = '';
    };
}

if (typeof window !== 'undefined') {
    const bootstrapAll = () => {
        document.querySelectorAll<HTMLElement>('.typewriter').forEach((root) => {
            const wordsAttr = root.dataset.typewriterWords;
            const words = wordsAttr ? wordsAttr.split('|') : DEFAULT_WORDS;
            const typingSpeed = Number(root.dataset.typewriterTyping ?? 80);
            const deletingSpeed = Number(root.dataset.typewriterDeleting ?? 40);
            const pauseDuration = Number(root.dataset.typewriterPause ?? 2500);
            startTypewriter(root, words, typingSpeed, deletingSpeed, pauseDuration);
        });
    };
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', bootstrapAll, { once: true });
    } else {
        bootstrapAll();
    }
}

type TypewriterProps = 
    & Define.Prop<'words', string[]>
    & Define.Prop<'typingSpeed', number, false>
    & Define.Prop<'deletingSpeed', number, false>
    & Define.Prop<'pauseDuration', number, false>
    & Define.Prop<'class', string, false>;

export const Typewriter = component<TypewriterProps>(({ props }) => {
    const typingSpeed = props.typingSpeed ?? 100;
    const deletingSpeed = props.deletingSpeed ?? 50;
    const pauseDuration = props.pauseDuration ?? 2000;
    let rootEl: HTMLElement | null = null;
    let stop: (() => void) | undefined;

    onMounted(() => {
        if (!rootEl) return;
        stop = startTypewriter(rootEl, props.words ?? [], typingSpeed, deletingSpeed, pauseDuration);
    });

    onUnmounted(() => {
        stop?.();
    });

    return () => (
        <span
            class={`typewriter ${props.class ?? ''}`}
            ref={(el: HTMLElement) => { rootEl = el; }}
            data-typewriter-words={(props.words ?? []).join('|')}
            data-typewriter-typing={String(typingSpeed)}
            data-typewriter-deleting={String(deletingSpeed)}
            data-typewriter-pause={String(pauseDuration)}
        >
            <span class="typewriter-text" />
            <span class="typewriter-cursor">|</span>
        </span>
    );
});

export default Typewriter;
