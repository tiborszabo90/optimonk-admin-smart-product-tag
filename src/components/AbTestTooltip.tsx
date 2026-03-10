import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'
import Laboratory_flask_liquid from './icons/Laboratory_flask_liquid.tsx'


// Component
function AbTestTooltip() {
    return <div className={"popper brand-tooltip-light brand-tooltip-right ml-n1"}>
        <div className={"more-menu-content"}>
            <div className={"brand-link-element brand-link-element-secondary brand-link-element-icon-left design-system"}>
                <div className={"brand-link-element-icon"}>
                    <Laboratory_flask_liquid />
                </div>
                <span className={"title"}>
                    A/B teszt center
                </span>
            </div>
        </div>
    </div>}


export default AbTestTooltip
