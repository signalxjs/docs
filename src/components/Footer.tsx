/**
 * Site Footer
 */

import { component } from 'sigx';
import { RouterLink } from '@sigx/router';
import { Select } from "@sigx/daisyui";

export const Footer = component(() => {
    const currentYear = new Date().getFullYear();
    
    return () => (
        <footer class="border-t border-base-content/10 bg-base-200/50">
            <div class="container mx-auto px-4 py-12">
                <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div class="col-span-2 md:col-span-1">
                        <div class="text-xl font-bold mb-4">
                            <span class="text-gradient">Signal</span>
                            <span>X</span>
                        </div>
                        <p class="text-sm text-base-content/60 max-w-xs">
                            A lightweight reactive component framework for building modern applications.
                        </p>
                    </div>
                    
                    {/* Docs */}
                    <div>
                        <h4 class="font-semibold mb-4">Documentation</h4>
                        <ul class="space-y-2 text-sm text-base-content/60">
                            <li>
                                <RouterLink to="/core/docs/getting-started" class="hover:text-base-content transition-colors">
                                    Getting Started
                                </RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/core/docs/signals" class="hover:text-base-content transition-colors">
                                    Core Concepts
                                </RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/core/api" class="hover:text-base-content transition-colors">
                                    API Reference
                                </RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/core/docs/components" class="hover:text-base-content transition-colors">
                                    Components
                                </RouterLink>
                            </li>
                        </ul>
                    </div>
                    
                    {/* Ecosystem */}
                    <div>
                        <h4 class="font-semibold mb-4">Ecosystem</h4>
                        <ul class="space-y-2 text-sm text-base-content/60">
                            <li>
                                <RouterLink to="/router" class="hover:text-base-content transition-colors">
                                    Router
                                </RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/core" class="hover:text-base-content transition-colors">
                                    Core
                                </RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/daisyui" class="hover:text-base-content transition-colors">
                                    DaisyUI
                                </RouterLink>
                            </li>
                        </ul>
                    </div>
                    
                    {/* Community */}
                    <div>
                        <h4 class="font-semibold mb-4">Community</h4>
                        <ul class="space-y-2 text-sm text-base-content/60">
                            <li>
                                <a href="https://github.com/signalxjs/core" target="_blank" rel="noopener" class="hover:text-base-content transition-colors">
                                    GitHub
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/signalxjs/core/discussions" target="_blank" rel="noopener" class="hover:text-base-content transition-colors">
                                    Discussions
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/signalxjs/core/releases" target="_blank" rel="noopener" class="hover:text-base-content transition-colors">
                                    Changelog
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/signalxjs/core/blob/main/LICENSE" target="_blank" rel="noopener" class="hover:text-base-content transition-colors">
                                    MIT License
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                
                {/* Copyright */}
                <div class="mt-12 pt-8 border-t border-base-content/10 text-center text-sm text-base-content/40">
                    <p>© {currentYear} SignalX. Built with SignalX + SSG.</p>
                </div>
            </div>
        </footer>
    );
});
