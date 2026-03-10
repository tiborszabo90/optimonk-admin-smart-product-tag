import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'


    
// Component

        function Popper({
            text,
            arrowLeft
        }: {
            text: string;
            arrowLeft?: string;
        }) {
            return (
                <div className={"popper"} style={{ width: "auto" }}>
                    <span data-v-716c1e5e={""}>
                        {text}
                    </span>
                    {arrowLeft !== undefined && (
                        <div
                            className={"popper__arrow"}
                            style={{ left: arrowLeft }}
                        >
                        </div>
                    )}
                </div>
            );
        }
    

export default Popper
