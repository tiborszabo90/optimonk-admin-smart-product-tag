import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'
import Upload_arrow_container from './icons/Upload_arrow_container.tsx'
import Circular_refresh_arrows from './icons/Circular_refresh_arrows.tsx'
import { UilFilter } from '@iconscout/react-unicons'



// Component

        function IconButton({
            variant
        }: {
            variant: 'upload' | 'refresh' | 'filter';
        }) {
            return (
                <button data-v-716c1e5e={""} className={"custom-btn"}>
                    {variant === 'upload' ? (
                        <Upload_arrow_container />
                    ) : variant === 'filter' ? (
                        <UilFilter size={24} />
                    ) : (
                        <Circular_refresh_arrows />
                    )}
                </button>
            );
        }
    

export default IconButton
