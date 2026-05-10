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

export const Typewriter = component<TypewriterProps>(({ props, signal }) => {
    const state = signal({
        displayText: '',
        wordIndex: 0,
        isDeleting: false
    });
    
    const typingSpeed = props.typingSpeed ?? 100;
    const deletingSpeed = props.deletingSpeed ?? 50;
    const pauseDuration = props.pauseDuration ?? 2000;
    
    let timeoutId: ReturnType<typeof setTimeout> | null = null;
    
    const tick = () => {
        const words = props.words ?? [];
        if (words.length === 0) return;
        
        const currentWord = words[state.wordIndex];
        const currentText = state.displayText;
        
        if (state.isDeleting) {
            // Deleting
            state.displayText = currentWord.substring(0, currentText.length - 1);
            
            if (state.displayText === '') {
                state.isDeleting = false;
                state.wordIndex = (state.wordIndex + 1) % words.length;
                timeoutId = setTimeout(tick, typingSpeed);
            } else {
                timeoutId = setTimeout(tick, deletingSpeed);
            }
        } else {
            // Typing
            state.displayText = currentWord.substring(0, currentText.length + 1);
            
            if (state.displayText === currentWord) {
                // Finished typing, pause then delete
                timeoutId = setTimeout(() => {
                    state.isDeleting = true;
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
            <span class="typewriter-text">{state.displayText}</span>
            <span class="typewriter-cursor">|</span>
        </span>
    );
});

export default Typewriter;
