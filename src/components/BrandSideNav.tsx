import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'
import Img from './Img.tsx'
import BrandSideNavLogo from './BrandSideNavLogo.tsx'
import BrandSideNavItem from './BrandSideNavItem.tsx'
import AbTestTooltip from './AbTestTooltip.tsx'
import SimpleDiv from './SimpleDiv.tsx'
import HelpCenterTooltip from './HelpCenterTooltip.tsx'
import BrandSideNavBottomItem from './BrandSideNavBottomItem.tsx'
import BrandAvatar from './BrandAvatar.tsx'
import Popper from './Popper.tsx'
import ProfilePopper from './ProfilePopper.tsx'


// Component

        function BrandSideNav() {
            return (
                <nav className={"brand-side-nav"}>
                    <BrandSideNavLogo imgId="0" />
                    <div className={"brand-side-nav-top"}>
                        <TopNavItem
                            tag="a"
                            className="brand-side-nav-item d-flex flex-column campaigns"
                            imgId="1"
                            label="Kampányok"
                        />
                        <TopNavItem
                            tag="a"
                            className="brand-side-nav-item d-flex flex-column subscribers"
                            imgId="2"
                            label="Közönség"
                        />
                        <TopNavItem
                            tag="a"
                            className="brand-side-nav-item d-flex flex-column analytics"
                            imgId="3"
                            label="Analitika"
                        />
                        <TopNavItem
                            tag="a"
                            className="brand-side-nav-item d-flex flex-column templates"
                            imgId="4"
                            label="Sablonok"
                        />
                        <div className={"more-menu-items"}>
                            <span>
                                <span style={{ display: "none" }}>
                                    <AbTestTooltip />
                                </span>
                                <div>
                                    <TopNavItem
                                        tag="div"
                                        className="brand-side-nav-item cursor-pointer d-flex flex-column"
                                        imgId="5"
                                        label="Több"
                                    />
                                </div>
                            </span>
                        </div>
                    </div>
                    <div className={"brand-side-nav-bottom"}>
                        <BottomTooltipItem
                            tooltipContent={
                                <div className={"popper brand-tooltip brand-tooltip-light brand-tooltip-right ml-n1"}>
                                    <SimpleDiv label="Újdonságok" />
                                </div>
                            }
                        >
                            <div className={"brand-side-nav-bottom-item cursor-pointer beamerTrigger"}>
                                <Img id="6" />
                            </div>
                        </BottomTooltipItem>

                        <BottomTooltipItem
                            tooltipContent={
                                <div className={"popper brand-tooltip brand-tooltip-light brand-tooltip-right ml-n1"}>
                                    <SimpleDiv label="Segítség" />
                                </div>
                            }
                        >
                            <span className={"help-center-popper"}>
                                <span style={{ display: "none" }}>
                                    <HelpCenterTooltip />
                                </span>
                                <BrandSideNavBottomItem />
                            </span>
                        </BottomTooltipItem>

                        <div className={"brand-side-nav-bottom-item"}>
                            <span>
                                <span style={{ display: "none" }}>
                                    <ProfilePopper
                                        initials="SA"
                                        avatarBackground="rgb(145,152,169)"
                                        name="Admin stageing4"
                                        email="staging4@shopifytest.com"
                                        subscriptionValue="Premium (havi)"
                                        nextPaymentDate="2033. feb.. 02."
                                        pageViewsValueText="4170 / 500 000"
                                        pageViewsProgressWidth="0.834%"
                                        activePagesValueText="8 / 10"
                                        activePagesProgressWidth="80%"
                                    />
                                </span>
                                <div className={"cursor-pointer"}>
                                    <BrandAvatar
                                        backgroundColor="rgb(145,152,169)"
                                        initials="SA"
                                    />
                                </div>
                            </span>
                        </div>
                    </div>
                </nav>
            );
        }
    

// Subcomponents

        function TopNavItem({
            tag,
            className,
            imgId,
            label
        }: {
            tag: string;
            className: string;
            imgId: string;
            label: string;
        }) {
            return (
                <BrandSideNavItem
                    tag={tag}
                    className={className}
                    imgId={imgId}
                    label={label}
                />
            );
        }

        function BottomTooltipItem({
            tooltipContent,
            children
        }: {
            tooltipContent: JSX.Element;
            children: React.ReactNode;
        }) {
            return (
                <span>
                    <span style={{ display: "none" }}>
                        {tooltipContent}
                    </span>
                    <div>
                        {children}
                    </div>
                </span>
            );
        }
    

export default BrandSideNav
