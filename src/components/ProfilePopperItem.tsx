import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'
import Popper from './Popper.tsx'
import ProfilePopper from './ProfilePopper.tsx'


    
// Component

        function ProfilePopperItem({
            label,
            id
        }: {
            label: string;
            id?: string;
        }) {
            return (
                <a
                    className={"brand-side-nav-profile-popper-item"}
                    id={id}
                >
                    {label}
                </a>
            );
        }
    

export default ProfilePopperItem
