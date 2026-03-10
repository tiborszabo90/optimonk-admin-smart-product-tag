import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'
import Stacked_clothes from './icons/Stacked_clothes.tsx'


// Component

        function CreditsSummary({
            perProductCredits,
            availableCredits
        }: {
            perProductCredits: number;
            availableCredits: number;
        }) {
            return (
                <div data-v-716c1e5e={""} className={"d-flex flex-column align-items-end"}>
                    <CreditsInfoRow>
                        <Stacked_clothes />
                        <span data-v-716c1e5e={""}>
                            {perProductCredits} kredit / termék
                        </span>
                    </CreditsInfoRow>
                    <CreditsInfoRow className="available-credits clickable">
                        <span data-v-716c1e5e={""}>
                            Elérhető: {availableCredits} kredit
                        </span>
                    </CreditsInfoRow>
                </div>
            );
        }
    

// Subcomponents

        function CreditsInfoRow({
            children,
            className = ""
        }: {
            children: React.ReactNode;
            className?: string;
        }) {
            return (
                <div
                    data-v-716c1e5e={""}
                    className={`credits-info${className ? ` ${className}` : ""}`}
                >
                    {children}
                </div>
            );
        }
    

export default CreditsSummary
