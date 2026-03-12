import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'
import Stacked_coins_light_gray from './icons/Stacked_coins_light_gray.tsx'
import PrimaryButton from './PrimaryButton.tsx'



// Component

        function SaveDropdownV4Img({
            isOpen = false,
            selectedCount = 0,
            generatedCount = 0,
            hasModified = false,
            onGenerate10
        }: {
            isOpen?: boolean;
            selectedCount?: number;
            generatedCount?: number;
            hasModified?: boolean;
            onGenerate10?: () => void;
        }) {
            const hasGenerated = generatedCount > 0;
            const label10 = hasModified ? "Mentés és újragenerálás 10 termékhez" : hasGenerated ? "Mentés és generálás további 10 termékhez" : "Mentés és generálás 10 termékhez";
            const label25 = hasModified ? "Mentés és újragenerálás 25 termékhez" : hasGenerated ? "Mentés és generálás további 25 termékhez" : "Mentés és generálás 25 termékhez";
            const labelAll = hasModified ? "Mentés és újragenerálás az összes termékhez (45 termék)" : hasGenerated ? "Mentés és generálás az összes további termékhez (45 termék)" : "Mentés és generálás az összes termékhez (45 termék)";
            const labelSelected = hasModified
                ? `Mentés és újragenerálás a kiválasztott termékekhez (${selectedCount} termék)`
                : `Mentés és generálás a kiválasztott termékekhez (${selectedCount} termék)`;
            return (
                <div data-v-b06cb0a2={""} data-v-716c1e5e={""} className={"save-dropdown-wrapper"}>
                    <PrimaryButton
                        className="save-dropdown-trigger btn btn-primary design-system"
                        label="Mentés"
                        navigateRoutes={JSON.stringify(["/v4-img/53722/settings/smart-product-tag-edit/699edcbfdb8587b4c75fa42f?step=2", "/v4-img/53722/settings/smart-product-tag-edit/699edcbfdb8587b4c75fa42f?step=3"])}
                        showChevron={true}
                    />
                    {isOpen && (
                        <div data-v-b06cb0a2={""} className={"save-dropdown-menu"} style={{ top: "48.5px", right: "0px" }}>
                            <SaveDropdownItem
                                label={label10}
                                credits="90 kredit"
                                Icon={Stacked_coins_light_gray}
                                onClick={onGenerate10}
                            />
                            <SaveDropdownItem
                                label={label25}
                                credits="225 kredit"
                                Icon={Stacked_coins_light_gray}
                            />
                            <SaveDropdownItem
                                label={labelAll}
                                credits="405 kredit"
                                Icon={Stacked_coins_light_gray}
                            />
                            <SaveDropdownItem
                                label={labelSelected}
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
            Icon,
            onClick
        }: {
            label: string;
            credits: string;
            Icon: any;
            onClick?: () => void;
        }) {
            return (
                <div data-v-b06cb0a2={""} className={"save-dropdown-item"} onClick={onClick} style={onClick ? { cursor: 'pointer' } : undefined}>
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


export default SaveDropdownV4Img
