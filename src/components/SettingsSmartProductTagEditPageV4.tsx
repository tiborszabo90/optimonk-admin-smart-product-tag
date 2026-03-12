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
import SaveDropdownV4 from './SaveDropdownV4.tsx'
import InstructionsPanelV4 from './InstructionsPanelV4.tsx'
import ProductPanelV4 from './ProductPanelV4.tsx'
import PanelHeaderV4 from './PanelHeaderV4.tsx'


// Component

        function SettingsSmartProductTagEditPageV4() {
            const location = useLocation();
            const [selectedCount, setSelectedCount] = React.useState(0);
            const [generatedCount, setGeneratedCount] = React.useState(0);
            const [hasModified, setHasModified] = React.useState(false);
            const [page, setPage] = React.useState(1);
            const totalPages = Math.ceil(34 / 10);

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
                                            case "/v4/53722/settings/smart-product-tag-edit/699edcbfdb8587b4c75fa42f":
                                            case "/v4/53722/settings/smart-product-tag-edit/699edcbfdb8587b4c75fa42f?step=3":
                                                return <SaveDropdownV4 isOpen={false} selectedCount={selectedCount} generatedCount={generatedCount} hasModified={hasModified} onGenerate10={() => { setGeneratedCount(10); setHasModified(false); }} />;
                                            case "/v4/53722/settings/smart-product-tag-edit/699edcbfdb8587b4c75fa42f?step=2":
                                                return <SaveDropdownV4 isOpen={true} selectedCount={selectedCount} generatedCount={generatedCount} hasModified={hasModified} onGenerate10={() => { setGeneratedCount(10); setHasModified(false); }} />;
                                            default:
                                                return null;
                                        }
                                    })()}
                                </div>
                            </div>
                            <div data-v-716c1e5e={""} className={"head-con"}>
                                <div data-v-716c1e5e={""} className={"d-flex justify-content-between align-items-center"}>
                                    <TagMetaInfo hasModified={hasModified} />
                                    <LastUpdated date="2026/03/03" />
                                </div>
                            </div>
                            <div data-v-716c1e5e={""} className={"panel-container"}>
                                <div data-v-716c1e5e={""} className={"d-flex flex-column"}>
                                    <InstructionsPanelV4 onModify={() => setHasModified(true)} />
                                </div>
                                <div data-v-716c1e5e={""} className={"arrow-vector"}>
                                    <Img id="8" />
                                </div>
                                <div data-v-716c1e5e={""} className={"preview-panel"}>
                                    <PanelHeaderV4 page={page} totalPages={totalPages} onPage={setPage} />
                                    <ProductPanelV4 dataId="0" onSelectionChange={setSelectedCount} generatedCount={generatedCount} hasModified={hasModified} page={page} onPage={setPage} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }


export default SettingsSmartProductTagEditPageV4
