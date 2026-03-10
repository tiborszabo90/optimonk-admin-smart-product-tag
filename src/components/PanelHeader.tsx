import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'
import Popper from './Popper.tsx'
import IconButton from './IconButton.tsx'
import RefreshButtonWrapper from './RefreshButtonWrapper.tsx'
import FilterPopover from './FilterPopover.tsx'


// Component

        function PanelHeader() {
            return (
                <div data-v-716c1e5e={""} className={"panel-header"}>
                    <div data-v-716c1e5e={""} className={"d-flex justify-content-between align-items-center"}>
                        <div data-v-716c1e5e={""} className={"panel-title"}>
                            Előnézet
                        </div>
                        <div data-v-716c1e5e={""} className={"panel-actions"}>
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
    

export default PanelHeader
