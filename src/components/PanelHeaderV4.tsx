import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'
import { UilAngleLeft, UilAngleRight } from '@iconscout/react-unicons'
import Popper from './Popper.tsx'
import IconButton from './IconButton.tsx'
import RefreshButtonWrapper from './RefreshButtonWrapper.tsx'
import FilterPopover from './FilterPopover.tsx'


// Component

        function PanelHeaderV4({
            page,
            totalPages,
            onPage
        }: {
            page: number;
            totalPages: number;
            onPage: (p: number) => void;
        }) {
            return (
                <div data-v-716c1e5e={""} className={"panel-header"}>
                    <div data-v-716c1e5e={""} className={"d-flex justify-content-between align-items-center"}>
                        <div data-v-716c1e5e={""} className={"panel-title"}>
                            Előnézet
                        </div>
                        <div data-v-716c1e5e={""} className={"panel-actions"} style={{ gap: '4px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0px', marginRight: '2px' }}>
                                <button className="paginator-btn" disabled={page === 1} onClick={() => onPage(page - 1)}>
                                    <UilAngleLeft size={24} color={page === 1 ? '#d5d8dd' : '#505763'} />
                                </button>
                                <button className="paginator-btn" disabled={page === totalPages} onClick={() => onPage(page + 1)}>
                                    <UilAngleRight size={24} color={page === totalPages ? '#d5d8dd' : '#505763'} />
                                </button>
                            </div>
                            <TooltipAction popperText="Export" arrowLeft="17px">
                                <IconButton variant="upload" />
                            </TooltipAction>
                            <FilterPopover />
                        </div>
                    </div>
                </div>
            );
        }


// Subcomponents

        function TooltipAction({
            popperText,
            arrowLeft,
            children
        }: {
            popperText: string;
            arrowLeft: string;
            children: React.ReactNode;
        }) {
            return (
                <span data-v-716c1e5e={""} className={"ds-tooltip ds-tooltip-dark design-system ds-tooltip-top"}>
                    <span style={{ display: "none" }}>
                        <Popper text={popperText} arrowLeft={arrowLeft} />
                    </span>
                    <span className={"reference"}>
                        {children}
                    </span>
                </span>
            );
        }


export default PanelHeaderV4
