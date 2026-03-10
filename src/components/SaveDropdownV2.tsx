import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'
import Stacked_coins_light_gray from './icons/Stacked_coins_light_gray.tsx'
import PrimaryButton from './PrimaryButton.tsx'



// Component

        function SaveDropdownV2({
            isOpen = false,
            selectedCount = 0
        }: {
            isOpen?: boolean;
            selectedCount?: number;
        }) {
            return (
                <div data-v-b06cb0a2={""} data-v-716c1e5e={""} className={"save-dropdown-wrapper"}>
                    <PrimaryButton
                        className="save-dropdown-trigger btn btn-primary design-system"
                        label="Mentés"
                        navigateRoutes={JSON.stringify(["/v2/53722/settings/smart-product-tag-edit/699edcbfdb8587b4c75fa42f?step=2", "/v2/53722/settings/smart-product-tag-edit/699edcbfdb8587b4c75fa42f?step=3"])}
                        showChevron={true}
                    />
                    {isOpen && (
                        <div data-v-b06cb0a2={""} className={"save-dropdown-menu"} style={{ top: "48.5px", right: "0px" }}>
                            <SaveDropdownItem
                                label="Mentés és újragenerálás 10 termékhez"
                                credits="90 kredit"
                                Icon={Stacked_coins_light_gray}
                            />
                            <SaveDropdownItem
                                label="Mentés és újragenerálás 25 termékhez"
                                credits="225 kredit"
                                Icon={Stacked_coins_light_gray}
                            />
                            <SaveDropdownItem
                                label="Mentés és újragenerálás a szűrt termékhez (45 termék)"
                                credits="405 kredit"
                                Icon={Stacked_coins_light_gray}
                            />
                            <SaveDropdownItem
                                label={`Mentés és újragenerálás a kiválasztott termékekhez (${selectedCount} termék)`}
                                credits={`${selectedCount * 9} kredit`}
                                Icon={Stacked_coins_light_gray}
                            />
                            <div data-v-b06cb0a2={""} className={"save-dropdown-item"}>
                                <div data-v-b06cb0a2={""} className={"save-dropdown-item-label"}>
                                    Mentés újragenerálás nélkül
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            );
        }


// Subcomponents

        function SaveDropdownItem({
            label,
            credits,
            Icon
        }: {
            label: string;
            credits: string;
            Icon: any;
        }) {
            return (
                <div data-v-b06cb0a2={""} className={"save-dropdown-item"}>
                    <div data-v-b06cb0a2={""} className={"save-dropdown-item-label"}>
                        {label}
                    </div>
                    <div data-v-b06cb0a2={""} className={"save-dropdown-item-credits"}>
                        <Icon />
                        {credits}
                    </div>
                </div>
            );
        }


export default SaveDropdownV2
