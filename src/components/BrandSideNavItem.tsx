import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'
import Img from './Img.tsx'
import BrandSideNav from './BrandSideNav.tsx'


    
// Component

        function BrandSideNavItem({
            tag,
            className,
            imgId,
            label
        }: {
            tag: 'a' | 'div';
            className: string;
            imgId: string;
            label: string;
        }) {
            if (tag === 'a') {
                return (
                    <a className={className}>
                        <Img id={imgId} />
                        <span className={"item-title"}>
                            {label}
                        </span>
                    </a>
                );
            }

            return (
                <div className={className}>
                    <Img id={imgId} />
                    <span className={"item-title"}>
                        {label}
                    </span>
                </div>
            );
        }
    

export default BrandSideNavItem
