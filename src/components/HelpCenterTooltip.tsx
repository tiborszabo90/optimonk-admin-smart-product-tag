import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'
import Closed_book from './icons/Closed_book.tsx'
import Play_button_circle from './icons/Play_button_circle.tsx'


// Component

        function HelpCenterTooltip() {
            return (
                <div className="popper brand-tooltip brand-tooltip-light brand-tooltip-right ml-n1">
                    <div className="help-center-content p-2">
                        <div className="help-center-main">
                            <div data-v-b0ffb60a={""} className="heading mb-4 heading-6 design-system">
                                Tudástár
                            </div>
                            <BrandTooltipLink
                                className="brand-link-element mb-3 brand-link-element-secondary brand-link-element-icon-left design-system"
                                icon={<Closed_book />}
                                label="Megnézem a tudásportált"
                            />
                            <BrandTooltipLink
                                className="brand-link-element brand-link-element-secondary brand-link-element-icon-left design-system"
                                icon={<Play_button_circle />}
                                label="Megnézem a bevezető videókat"
                            />
                        </div>
                    </div>
                </div>
            );
        }
    

// Subcomponents

        function BrandTooltipLink({
            className,
            icon,
            label
        }: {
            className: string;
            icon: JSX.Element;
            label: string;
        }) {
            return (
                <div className={className}>
                    <div className="brand-link-element-icon">
                        {icon}
                    </div>
                    <span>
                        {label}
                    </span>
                </div>
            );
        }
    

export default HelpCenterTooltip
