import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'


    
// Component

        function ProgressItem({
            label,
            valueText,
            progressWidth,
            headerJustifyCenter,
            valueTextRight,
            progressWrapperExtraClass,
            progressWrapperStyle,
            progressWrapperDataAttr
        }: {
            label: string;
            valueText: string;
            progressWidth: string;
            headerJustifyCenter?: boolean;
            valueTextRight?: boolean;
            progressWrapperExtraClass?: string;
            progressWrapperStyle?: { [key: string]: string };
            progressWrapperDataAttr?: string;
        }) {
            return (
                <div className={"brand-side-nav-profile-popper-content-body-right-item-progress"}>
                    <div className={`d-flex${headerJustifyCenter ? " justify-content-center" : ""}`}>
                        <div className={"font-size-0--75 brand-side-nav-profile-popper-gray"}>
                            {label}
                        </div>
                        <div
                            className={`ml-auto font-size-0--75 brand-side-nav-profile-popper-black${valueTextRight ? " text-right" : ""}`}
                        >
                            {valueText}
                        </div>
                    </div>
                    {progressWrapperDataAttr !== undefined ? (
                        <div
                            data-v-afff6e7a={progressWrapperDataAttr}
                            className={`progress${progressWrapperExtraClass ? ` ${progressWrapperExtraClass}` : ""}`}
                            style={progressWrapperStyle}
                        >
                            <div
                                data-v-afff6e7a={progressWrapperDataAttr}
                                role={"progressbar"}
                                className={"progress-bar"}
                                style={{ width: progressWidth, backgroundColor: "rgb(109,154,231)" }}
                            ></div>
                        </div>
                    ) : (
                        <div
                            className={`progress${progressWrapperExtraClass ? ` ${progressWrapperExtraClass}` : ""}`}
                            style={progressWrapperStyle}
                        >
                            <div
                                role={"progressbar"}
                                className={"progress-bar"}
                                style={{ width: progressWidth, backgroundColor: "rgb(109,154,231)" }}
                            ></div>
                        </div>
                    )}
                </div>
            );
        }
    

export default ProgressItem
