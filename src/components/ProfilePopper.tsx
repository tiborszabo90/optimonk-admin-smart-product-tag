import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'
import SimpleDiv from './SimpleDiv.tsx'
import ProfilePopperItem from './ProfilePopperItem.tsx'
import ProfilePopperInfoItem from './ProfilePopperInfoItem.tsx'
import ProgressItem from './ProgressItem.tsx'
import Popper from './Popper.tsx'


// Component

        function ProfilePopper({
            initials,
            avatarBackground,
            name,
            email,
            subscriptionValue,
            nextPaymentDate,
            pageViewsValueText,
            pageViewsProgressWidth,
            activePagesValueText,
            activePagesProgressWidth
        }: {
            initials: string;
            avatarBackground: string;
            name: string;
            email: string;
            subscriptionValue: string;
            nextPaymentDate: string;
            pageViewsValueText: string;
            pageViewsProgressWidth: string;
            activePagesValueText: string;
            activePagesProgressWidth: string;
        }) {
            return (
                <div className={"popper brand-side-nav-profile-popper"}>
                    <div className={"brand-side-nav-profile-popper-content"}>
                        <div className={"brand-side-nav-profile-popper-content-top"}>
                            <div className={"brand-side-nav-profile-popper-content-top-img"}>
                                <div
                                    className={"brand-avatar brand-avatar-big"}
                                    style={{ background: avatarBackground }}
                                >
                                    <SimpleDiv label={initials} />
                                </div>
                            </div>
                            <div className={"ml-3 mb-2"}>
                                <div className={"font-weight-bold font-size-0--9375"}>
                                    {name}
                                </div>
                                <div className={"font-size-0--875 brand-side-nav-profile-popper-gray text-truncate"}>
                                    {email}
                                </div>
                            </div>
                        </div>
                        <div className={"brand-side-nav-profile-popper-content-body"}>
                            <div className={"brand-side-nav-profile-popper-content-body-left"}>
                                <div className={"d-flex flex-column justify-content-center"}>
                                    <ProfilePopperItem label="Előfizetés" />
                                    <ProfilePopperItem label="Beállítások" />
                                    <ProfilePopperItem
                                        label="Felhasználók kezelése"
                                        id="inviteYourTeamProfileAction"
                                    />
                                    <ProfilePopperItem label="Ügynökségeknek" />
                                    <ProfilePopperItem label="Kijelentkezés" />
                                </div>
                            </div>
                            <div className={"brand-side-nav-profile-popper-content-body-right"}>
                                <div className={"d-flex flex-column justify-content-center"}>
                                    <ProfilePopperInfoItem
                                        label="Előfizetésem"
                                        value={subscriptionValue}
                                    />
                                    <ProfilePopperInfoItem
                                        label="Következő fizetés"
                                        value={nextPaymentDate}
                                    />
                                    <ProgressItem
                                        label="Oldalmegtekintés"
                                        valueText={pageViewsValueText}
                                        progressWidth={pageViewsProgressWidth}
                                        headerJustifyCenter={true}
                                        valueTextRight={true}
                                        progressWrapperStyle={{ height: "0.375rem" }}
                                        progressWrapperDataAttr=""
                                    />
                                    <ProgressItem
                                        label="Aktív oldalak"
                                        valueText={activePagesValueText}
                                        progressWidth={activePagesProgressWidth}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"popper__arrow"} style={{ top: "285px" }}>
                    </div>
                </div>
            );
        }
    

export default ProfilePopper
