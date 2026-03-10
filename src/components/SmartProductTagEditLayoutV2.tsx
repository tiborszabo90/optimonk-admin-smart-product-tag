import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'
import AngleUpIcon from './AngleUpIcon.tsx'
import BrandSideNav from './BrandSideNav.tsx'
import SettingsSmartProductTagEditPageV2 from './SettingsSmartProductTagEditPageV2.tsx'


// Component

        function SmartProductTagEditLayoutV2() {
            return (
                <body className={""}>
                    <iframe
                        className={"brand-loading-transition brand-loading-transition-nav-width om-fadeOut"}
                        style={{ display: "none" }}
                        sandbox={"allow-popups allow-top-navigation-by-user-activation"}
                        src="/frames/b20ed9c0-589a-4cee-bba4-0b3b3142bef6/index.html"
                    >
                    </iframe>
                    <div className={"brand-page-wrap"}>
                        <div className={"d-flex"}>
                            <BrandSideNav />
                            <div className={"brand-page-wrap-content brand-page-wrap-content-margin-left"}>
                                <div className={"notification-bar sticky-top"}>
                                </div>
                                <div className={"brand-wrapper-fluid container-fluid smart_product_tag_edit"}>
                                    <SettingsSmartProductTagEditPageV2 />
                                </div>
                                <div className={"brand-scroll-top"}>
                                    <AngleUpIcon />
                                </div>
                                <div
                                    className={"vue-notification-group"}
                                    style={{ position: "fixed", padding: "10px", bottom: "0px", right: "0px" }}
                                >
                                    <span>
                                    </span>
                                </div>
                                <div
                                    data-v-33ee7ba2={""}
                                    className={"v-portal"}
                                    style={{ display: "none" }}
                                >
                                </div>
                                <div
                                    className={"v-portal"}
                                    style={{ display: "none" }}
                                >
                                </div>
                                <div className={"vue-portal-target"}>
                                </div>
                            </div>
                        </div>
                    </div>
                    <iframe
                        id={"__OM_native_iframe"}
                        style={{ display: "none" }}
                        sandbox={"allow-popups allow-top-navigation-by-user-activation"}
                        src="/frames/595f7b8d-a91f-4310-bdae-0d661bf890c8/index.html"
                    >
                    </iframe>
                    <iframe
                        style={{ display: "none" }}
                        sandbox={"allow-popups allow-top-navigation-by-user-activation"}
                        src="/frames/1815e4c1-9509-4621-9da0-96d807f4a768/index.html"
                    >
                    </iframe>
                    <iframe
                        style={{ display: "none" }}
                        sandbox={"allow-popups allow-top-navigation-by-user-activation"}
                        src="/frames/c491613b-fcbf-4b80-8208-cc5d8a4fc5fc/index.html"
                    >
                    </iframe>
                </body>
            );
        }


export default SmartProductTagEditLayoutV2
