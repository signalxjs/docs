/**
 * TypeScript declarations for docs app
 */

// Re-export types from @sigx/daisyui (workaround for monorepo development)
declare module '@sigx/daisyui' {
    import type { ComponentFactory, Define } from 'sigx';
    
    export const Button: ComponentFactory<any>;
    export const ButtonGroup: ComponentFactory<any>;
    export const ThemeToggle: ComponentFactory<any>;
    export const ThemeProvider: ComponentFactory<any>;
    export const ThemeSelector: ComponentFactory<any>;
    export const Card: ComponentFactory<any>;
    export const CardBody: ComponentFactory<any>;
    export const CardTitle: ComponentFactory<any>;
    export const CardActions: ComponentFactory<any>;
    export const Badge: ComponentFactory<any>;
    export const Container: ComponentFactory<any>;
    export const Stack: ComponentFactory<any>;
    export const HStack: ComponentFactory<any>;
    export const VStack: ComponentFactory<any>;
    export const Divider: ComponentFactory<any>;
    export const Input: ComponentFactory<any>;
    export const Textarea: ComponentFactory<any>;
    export const Select: ComponentFactory<any>;
    export const FormField: ComponentFactory<any>;
    export const Toggle: ComponentFactory<any>;
    export const Checkbox: ComponentFactory<any>;
    export const Radio: ComponentFactory<any>;
    export const Range: ComponentFactory<any>;
    export const Alert: ComponentFactory<any>;
    export const Modal: ComponentFactory<any>;
    export const Toast: ComponentFactory<any>;
    export const Progress: ComponentFactory<any>;
    export const Loading: ComponentFactory<any>;
    export const Tooltip: ComponentFactory<any>;
    export const Dropdown: ComponentFactory<any>;
    export const Menu: ComponentFactory<any>;
    export const Navbar: ComponentFactory<any>;
    export const Tabs: ComponentFactory<any>;
    export const Breadcrumbs: ComponentFactory<any>;
    export const Pagination: ComponentFactory<any>;
    export const Table: ComponentFactory<any>;
    export const Avatar: ComponentFactory<any>;
    export const Collapse: ComponentFactory<any>;
    
    export function getCurrentTheme(): string;
    export function setTheme(theme: string): void;
    export function getPreferredTheme(): string;
    export function initializeTheme(config?: any): void;
    export function toggleDarkMode(): void;
}
