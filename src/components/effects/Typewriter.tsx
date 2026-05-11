/**
 * Typewriter - Animated text typing effect
 * 
 * Cycles through an array of words with a typing animation.
 */

import { component, onMounted, onUnmounted, type Define } from 'sigx';

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

    let textEl: HTMLElement | null = null;
    let timeoutId: ReturnType<typeof setTimeout> | null = null;
    let wordIndex = 0;
    let displayText = '';
    let isDeleting = false;

    const tick = () => {
        if (!textEl) return;
        const words = props.words ?? [];
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

    onMounted(() => {
        tick();
    });

    onUnmounted(() => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
    });

    return () => (
        <span class={`typewriter ${props.class ?? ''}`}>
            <span class="typewriter-text" ref={(el: HTMLElement) => { textEl = el; }} />
            <span class="typewriter-cursor">|</span>
        </span>
    );
});

export default Typewriter;
