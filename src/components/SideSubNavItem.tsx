import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'
import SideSubNav from './SideSubNav.tsx'


    
// Component

        function SideSubNavItem({
            label,
            isActive = false
        }: {
            label: string;
            isActive?: boolean;
        }) {
            return (
                <ul className={"brand-side-sub-nav-list brand-side-sub-nav-list-by-group"}>
                    <li className={"brand-side-sub-nav-list-item"}>
                        <a
                            className={
                                isActive
                                    ? "brand-side-sub-nav-list-item-link router-link-active router-link-exact-active"
                                    : "brand-side-sub-nav-list-item-link"
                            }
                        >
                            {label}
                        </a>
                    </li>
                </ul>
            );
        }
    

export default SideSubNavItem
