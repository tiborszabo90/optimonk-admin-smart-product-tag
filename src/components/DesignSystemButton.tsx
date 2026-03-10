import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'


    
// Component

        function DesignSystemButton({
            buttonClassName,
            label
        }: {
            buttonClassName: string;
            label: string;
        }) {
            return (
                <button
                    data-v-54b206f2={""}
                    data-v-716c1e5e={""}
                    type={"button"}
                    className={buttonClassName}
                >
                    <span
                        data-v-54b206f2={""}
                        className={"d-inline-flex justify-content-center align-items-center"}
                    >
                        {label}
                    </span>
                </button>
            );
        }
    

export default DesignSystemButton
