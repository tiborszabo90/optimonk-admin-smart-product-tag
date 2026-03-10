import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'


// Component

        function BrandAvatar({
            backgroundColor,
            initials
        }: {
            backgroundColor: string;
            initials: string;
        }) {
            return (
                <div className={"brand-avatar"} style={{ background: backgroundColor }}>
                    <div>
                        {initials}
                    </div>
                </div>
            );
        }
    

export default BrandAvatar
