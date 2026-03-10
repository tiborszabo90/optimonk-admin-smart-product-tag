import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'
import Img from './Img.tsx'
import BackButton from './BackButton.tsx'
import TitleHeading from './TitleHeading.tsx'
import CreditsSummary from './CreditsSummary.tsx'
import TagMetaInfo from './TagMetaInfo.tsx'
import LastUpdated from './LastUpdated.tsx'
import SideSubNav from './SideSubNav.tsx'
import SaveDropdown from './SaveDropdown.tsx'
import InstructionsPanel from './InstructionsPanel.tsx'
import ProductPanel from './ProductPanel.tsx'
import PanelHeader from './PanelHeader.tsx'


// Component

        function SettingsSmartProductTagEditPage() {
            const location = useLocation();
            const [selectedCount, setSelectedCount] = React.useState(0);

            return (
                <div className={"row"}>
                    <div className={"d-flex col-4 col-lg-2 px-0 setting-tab"}>
                        <div className={"brand-side-sub-nav"}>
                            <div data-v-b0ffb60a={""} className={"heading brand-side-sub-nav-title heading-4 design-system"}>
                                Beállítások
                            </div>

                            <SideSubNav dataId="0" />
                            <SideSubNav dataId="1" />
                            <SideSubNav dataId="2" />
                            <SideSubNav dataId="3" />
                        </div>
                    </div>
                    <div className={"col-8 col-lg-10 py-5 px-4 setting-tab-page"}>
                        <div data-v-716c1e5e={""} className={"container-fluid px-6"}>
                            <div data-v-716c1e5e={""} className={"d-flex justify-content-between align-items-center bread-con"}>
                                <div data-v-716c1e5e={""} className={"d-flex align-items-center gap-3"}>
                                    <BackButton />
                                    <TitleHeading title="PPO - Headline + Subheadline" />
                                </div>
                                <div data-v-716c1e5e={""} className={"d-flex justify-content-end gap-3 align-items-center"}>
                                    <CreditsSummary perProductCredits={9} availableCredits={880} />
                                    {(() => {
                                        switch (location.pathname + location.search + location.hash) {
                                            case "/53722/settings/smart-product-tag-edit/699edcbfdb8587b4c75fa42f":
                                            case "/53722/settings/smart-product-tag-edit/699edcbfdb8587b4c75fa42f?step=3":
                                                return <SaveDropdown isOpen={false} selectedCount={selectedCount} />;
                                            case "/53722/settings/smart-product-tag-edit/699edcbfdb8587b4c75fa42f?step=2":
                                                return <SaveDropdown isOpen={true} selectedCount={selectedCount} />;
                                            default:
                                                return null;
                                        }
                                    })()}
                                </div>
                            </div>
                            <div data-v-716c1e5e={""} className={"head-con"}>
                                <div data-v-716c1e5e={""} className={"d-flex justify-content-between align-items-center"}>
                                    <TagMetaInfo />
                                    <LastUpdated date="2026/03/03" />
                                </div>
                            </div>
                            <div data-v-716c1e5e={""} className={"panel-container"}>
                                <div data-v-716c1e5e={""} className={"d-flex flex-column"}>
                                    <InstructionsPanel />
                                </div>
                                <div data-v-716c1e5e={""} className={"arrow-vector"}>
                                    <Img id="8" />
                                </div>
                                <div data-v-716c1e5e={""} className={"preview-panel"}>
                                    <PanelHeader />
                                    <ProductPanel dataId="0" onSelectionChange={setSelectedCount} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    

export default SettingsSmartProductTagEditPage
