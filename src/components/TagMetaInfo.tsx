import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'


// Component

        function TagMetaInfo({ hasModified = false }: { hasModified?: boolean }) {
            return (
                <div data-v-716c1e5e={""} className={"text-left"}>
                    <div data-v-716c1e5e={""} className={"text-left d-flex align-items-center mb-1"}>
                        {hasModified && (
                            <Chip
                                wrapperClass={"chip chip-sm design-system chip-gray"}
                                label={"Mentetlen módosítások"}
                            />
                        )}
                        <Chip
                            wrapperClass={"chip status-chip chip-sm design-system chip-primary ml-2"}
                            label={"Használatra kész"}
                        />
                        <span data-v-716c1e5e={""} className={"last-updated ml-2"}>
                            Generált: 28 / 28
                        </span>
                    </div>
                </div>
            );
        }
    

// Subcomponents

        function Chip({
            wrapperClass,
            label
        }: {
            wrapperClass: string;
            label: string;
        }) {
            return (
                <div data-v-4811c2cf={""} data-v-716c1e5e={""} className={wrapperClass}>
                    <div data-v-4811c2cf={""} className={"chip-content"}>
                        {label}
                    </div>
                </div>
            );
        }
    

export default TagMetaInfo
