/**
 * InteractiveCode - Re-export LiveCodeWindow with docs styling
 * 
 * This component wraps the @sigx/live-code LiveCodeWindow component.
 * It keeps existing code blocks with Shiki highlighting and adds
 * a "Try Live" button that opens a full-screen playground modal.
 */

// Re-export the main component
export { LiveCodeWindow as InteractiveCode } from '@sigx/live-code';

// Also export the components for direct use
export { LiveCodeWindow, LiveCodeModal } from '@sigx/live-code';

