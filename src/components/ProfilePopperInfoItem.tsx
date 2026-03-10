import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'
import Popper from './Popper.tsx'
import ProfilePopper from './ProfilePopper.tsx'


    
// Component

        function ProfilePopperInfoItem({
            label,
            value
        }: {
            label: string;
            value: string;
        }) {
            return (
                <div className={"brand-side-nav-profile-popper-content-body-right-item"}>
                    <div className={"font-size-0--75 brand-side-nav-profile-popper-gray"}>
                        {label}
                    </div>
                    <div className={"font-size-0--75 brand-side-nav-profile-popper-black ml-auto"}>
                        {value}
                    </div>
                </div>
            );
        }
    

export default ProfilePopperInfoItem
