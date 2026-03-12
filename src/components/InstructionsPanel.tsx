import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'
import Closed_book from './icons/Closed_book.tsx'
import Stacked_coins_light_gray from './icons/Stacked_coins_light_gray.tsx'
import Stacked_folded_towels from './icons/Stacked_folded_towels.tsx'
import Stacked_coins_light_gray2 from './icons/Stacked_coins_light_gray2.tsx'
import Graduation_cap from './icons/Graduation_cap.tsx'
import Closed_book1 from './icons/Closed_book1.tsx'
import InstructionTextarea from './InstructionTextarea.tsx'
import AiModelLabel from './AiModelLabel.tsx'
import SwitchInput from './SwitchInput.tsx'
import Popper from './Popper.tsx'
import DesignSystemButton from './DesignSystemButton.tsx'


// Component

        function InstructionsPanel() {
            return (
                <div data-v-716c1e5e={""} className={"instructions-panel"}>
                    <div data-v-716c1e5e={""} className={"panel-header"}>
                        <div data-v-716c1e5e={""} className={"d-flex justify-content-between align-items-center"} style={{ marginBottom: "16px" }}>
                            <div data-v-716c1e5e={""}>
                                <div data-v-716c1e5e={""} className={"panel-title"}>
                                    Utasítások
                                </div>
                                <div data-v-716c1e5e={""} className={"panel-subtitle"}>
                                    Változók: headline4, subHeadline4
                                </div>
                            </div>
                            <div data-v-716c1e5e={""} className={"d-flex align-items-center"}>
                                <AiModelLabel />
                                <div data-v-2f342a8a={""} data-v-716c1e5e={""} className={"switch switch-position-half switch-is-active design-system"}>
                                    <SwitchInput />
                                    <div data-v-2f342a8a={""} className={"switch-wrapper"}>
                                        <div data-v-2f342a8a={""} className={"switch-track"}>
                                            <div data-v-2f342a8a={""} className={"switch-thumb"}>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <span data-v-716c1e5e={""} className={"ds-tooltip ml-2 ds-tooltip-dark design-system ds-tooltip-top"}>
                                    <span style={{ display: "none" }}>
                                        <Popper text="Ez a funkció további kreditköltségeket okozhat a háttérben." />
                                    </span>
                                    <span className={"reference"}>
                                        <Stacked_folded_towels />
                                    </span>
                                </span>
                            </div>
                        </div>
                        <div data-v-716c1e5e={""} className={"panel-subtitle"} style={{ marginBottom: "16px" }}>
                            Változók: headline4, subHeadline4
                        </div>
                        <div data-v-716c1e5e={""} className={"panel-content"}>
                            <div data-v-716c1e5e={""} className={"instruction-text-area"}>
                                <div data-v-716c1e5e={""}>
                                    <div>
                                        <InstructionTextarea />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-v-716c1e5e={""} className={"panel-footer"}>
                        <div data-v-716c1e5e={""} className={"footer-actions mb-4"}>
                            <div data-v-716c1e5e={""} className={"d-flex justify-content-end align-items-start"}>
                                <DesignSystemButton
                                    buttonClassName="btn btn-link design-system"
                                    label="Speciális beállítások"
                                />
                                <div data-v-716c1e5e={""} className={"preview-button-wrapper ml-2"}>
                                    <DesignSystemButton
                                        buttonClassName="orange-secondary btn btn-secondary design-system"
                                        label="Előnézet"
                                    />
                                </div>
                            </div>
                            <div data-v-716c1e5e={""} className={"preview-credits"}>
                                <Stacked_coins_light_gray2 />
                                20 termék / 180 kredit
                            </div>
                        </div>
                        <div data-v-716c1e5e={""} className={"footer-info"}>
                            <div data-v-716c1e5e={""} className={"d-flex align-items-start"}>
                                <div data-v-716c1e5e={""} className={"info-icon mr-1"}>
                                    <Graduation_cap />
                                </div>
                                <div data-v-716c1e5e={""} className={"info-text"}>
                                    Beállíthatja a hangnemet, a szövegek hosszát és hozzáadhat konkrét utasításokat.
                                </div>
                            </div>
                            <div data-v-716c1e5e={""} className={"d-flex align-items-center"}>
                                <div data-v-716c1e5e={""} className={"info-icon mr-1"}>
                                    <Closed_book1 />
                                </div>
                                <div data-v-716c1e5e={""} className={"info-read-more"}>
                                    Olvass tovább
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    

export default InstructionsPanel
