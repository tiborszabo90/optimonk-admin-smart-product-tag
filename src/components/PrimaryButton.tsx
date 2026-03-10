import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'
import Downward_chevron from './icons/Downward_chevron.tsx'


    
// Component

        function PrimaryButton({
            className,
            label,
            navigateRoutes,
            showChevron
        }: {
            className: string;
            label: string;
            navigateRoutes?: string;
            showChevron?: boolean;
        }) {
            return (
                <button
                    data-v-54b206f2={""}
                    data-v-b06cb0a2={""}
                    type={"button"}
                    className={className}
                >
                    <span
                        data-v-54b206f2={""}
                        className={"d-inline-flex justify-content-center align-items-center"}
                        {...(navigateRoutes
                            ? { "data-navigate-routes": navigateRoutes }
                            : {})}
                    >
                        <span data-v-b06cb0a2={""} data-v-54b206f2={""}>
                            {label}
                        </span>
                        {showChevron ? <Downward_chevron /> : null}
                    </span>
                </button>
            );
        }
    

export default PrimaryButton
