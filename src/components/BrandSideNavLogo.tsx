import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'
import Img from './Img.tsx'
import BrandSideNav from './BrandSideNav.tsx'


// Component

        function BrandSideNavLogo({ imgId }: { imgId: string }) {
            return (
                <a className={"brand-side-nav-logo"}>
                    <Img id={imgId} />
                </a>
            )
        }
    

export default BrandSideNavLogo
