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

        function InstructionsPanelV2Gen({ onModify }: { onModify?: () => void }) {
            return (
                <div data-v-716c1e5e={""} className={"instructions-panel"} onChange={onModify}>
                    <div data-v-716c1e5e={""} className={"panel-header"}>
                        <div data-v-716c1e5e={""} className={"d-flex justify-content-between align-items-center"} style={{ marginBottom: "16px" }}>
                            <div data-v-716c1e5e={""} className={"panel-title"}>
                                Utasítások
                            </div>
                            <div data-v-716c1e5e={""} className={"panel-subtitle"}>
                                Változók: headline4, subHeadline4
                            </div>
                        </div>
                        <div data-v-716c1e5e={""} className={"panel-content"}>
                            <div data-v-716c1e5e={""} className={"instruction-text-area"}>
                                <div data-v-716c1e5e={""}>
                                    <div>
                                        <InstructionTextarea />
                                    </div>
                                </div>
                                <div data-v-716c1e5e={""} className={"d-flex align-items-center mt-5 mb-5"}>
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
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-v-716c1e5e={""} className={"panel-footer"}>
                        <div data-v-716c1e5e={""} className={"footer-actions mb-4"}>
                            <div data-v-716c1e5e={""} className={"d-flex justify-content-end align-items-start"}>
                                <DesignSystemButton
                                    buttonClassName="btn btn-secondary design-system"
                                    label="Speciális beállítások"
                                />
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


export default InstructionsPanelV2Gen
