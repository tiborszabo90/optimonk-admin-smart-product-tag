import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'
import SideSubNavItem from './SideSubNavItem.tsx'


        type SideSubNavData = {
            title: string;
            items: {
                label: string;
                isActive?: boolean;
            }[];
        }
    
// Component

        function SideSubNav({
            dataId
        }: {
            dataId: string;
        }) {
            const { title, items }: SideSubNavData = getSideSubNavData(dataId);

            return (
                <ul className={"brand-side-sub-nav-list"}>
                    <li className={"brand-side-sub-nav-group"}>
                        {title}
                    </li>

                    {items.map((item) => (
                        <SideSubNavItem
                            key={item.label}
                            label={item.label}
                            isActive={item.isActive}
                        />
                    ))}
                </ul>
            );
        }
    


        function getSideSubNavData(id: string): SideSubNavData {
            const key = id.toString();

            const data: Record<string, SideSubNavData> = {
                "0": {
                    title: "Kontakt információ",
                    items: [
                        { label: "Személyes adatok" },
                        { label: "Email változtatása" },
                        { label: "Jelszó változtatás" }
                    ]
                },
                "1": {
                    title: "Számlázás",
                    items: [
                        { label: "Számlázási cím" },
                        { label: "Fizetési mód" },
                        { label: "Számlák" }
                    ]
                },
                "2": {
                    title: "Termék",
                    items: [
                        { label: "AI termék címkék", isActive: true },
                        { label: "Termékkatalógus" },
                        { label: "AI ajánlók" }
                    ]
                },
                "3": {
                    title: "Fiók",
                    items: [
                        { label: "Látogatói Élmény Védelem" },
                        { label: "Domainek" },
                        { label: "E-mail értesítések" },
                        { label: "Felhasználók" },
                        { label: "Kódbeillesztés" },
                        { label: "Konverziós célok" },
                        { label: "API kulcs" },
                        { label: "Labs" }
                    ]
                }
            };

            return data[key] ?? {
                title: "",
                items: []
            };
        }
    

export default SideSubNav
