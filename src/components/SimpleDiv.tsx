import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'


    
// Component

        function SimpleDiv({
            label
        }: {
            label: string;
        }) {
            return (
                <div>
                    {label}
                </div>
            );
        }
    

export default SimpleDiv
