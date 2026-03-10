import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'
import SectionLabel from './SectionLabel.tsx'
import SectionText from './SectionText.tsx'


        type ProductPanelData = {
            previews: {
                title: string;
                sections: {
                    label: string;
                    text: string;
                }[];
            }[];
        }
    
// Component

        function ProductPanel({
            dataId,
            onSelectionChange
        }: {
            dataId: string;
            onSelectionChange?: (count: number) => void;
        }) {
            const { previews }: ProductPanelData = getProductPanelData(dataId);
            const [selectedIds, setSelectedIds] = React.useState<Set<number>>(new Set());

            const handleToggle = (index: number, selected: boolean) => {
                setSelectedIds(prev => {
                    const next = new Set(prev);
                    selected ? next.add(index) : next.delete(index);
                    onSelectionChange?.(next.size);
                    return next;
                });
            };

            return (
                <div data-v-716c1e5e={""} className={"panel-content preview-content"}>
                    {previews.map((preview, index) => (
                        <ProductPreview
                            key={index}
                            title={preview.title}
                            sections={preview.sections}
                            onToggle={(selected) => handleToggle(index, selected)}
                        />
                    ))}
                </div>
            );
        }
    

// Subcomponents

        function ProductPreview({
            title,
            sections,
            onToggle
        }: {
            title: string;
            sections: { label: string; text: string }[];
            onToggle?: (selected: boolean) => void;
        }) {
            const [selected, setSelected] = React.useState(false);

            const handleClick = () => {
                const next = !selected;
                setSelected(next);
                onToggle?.(next);
            };

            return (
                <div
                    data-v-716c1e5e={""}
                    className={"product-preview" + (selected ? " product-preview--selected" : "")}
                    onClick={handleClick}
                >
                    <div data-v-716c1e5e={""} className={"product-title"}>
                        {title}
                    </div>
                    <div data-v-716c1e5e={""} className={"product-sections"}>
                        {sections.map((section, idx) => (
                            <ProductSection
                                key={idx}
                                label={section.label}
                                text={section.text}
                            />
                        ))}
                    </div>
                </div>
            );
        }

        function ProductSection({
            label,
            text
        }: {
            label: string;
            text: string;
        }) {
            return (
                <div data-v-716c1e5e={""} className={"product-section"}>
                    <div data-v-716c1e5e={""} className={"section-content"}>
                        <SectionLabel label={label} />
                        <SectionText text={text} />
                    </div>
                </div>
            );
        }
    


        function getProductPanelData(id: string): ProductPanelData {
            const key = String(id);
            return {
                previews: [
                    {
                        title: "Amsterdam 2019 országúti kerékpár alumínium - halványkék",
                        sections: [
                            { label: "subHeadline4", text: "Lightweight design with superior handling" },
                            { label: "headline4", text: "Discover the Thrill of Effortless Cycling" }
                        ]
                    },
                    {
                        title: "Amsterdam 2019 országúti kerékpár alumínium - lila",
                        sections: [
                            { label: "subHeadline4", text: "Designed For Smooth And Effortless Rides" },
                            { label: "headline4", text: "Experience Unmatched Comfort And Style" }
                        ]
                    },
                    {
                        title: "Amsterdam 2019 országúti kerékpár alumínium - szürke",
                        sections: [
                            { label: "subHeadline4", text: "Engineered for smooth rides and quick maneuvers" },
                            { label: "headline4", text: "Experience Unmatched Speed and Comfort" }
                        ]
                    },
                    {
                        title: "Amsterdam 2019 országúti kerékpár alumínium - kék",
                        sections: [
                            { label: "subHeadline4", text: "Built for Performance and Durability" },
                            { label: "headline4", text: "Unleash Your Inner Cyclist" }
                        ]
                    },
                    {
                        title: "Amsterdam 2020 MTB kerékpár alumínium - fekete/piros",
                        sections: [
                            { label: "subHeadline4", text: "Experience lightweight design and superior handling" },
                            { label: "headline4", text: "Conquer Trails With Unmatched Agility" }
                        ]
                    },
                    {
                        title: "Amsterdam 2018 országúti kerékpár fehér",
                        sections: [
                            { label: "subHeadline4", text: "Engineered for smooth and effortless cycling" },
                            { label: "headline4", text: "Experience Ultimate Comfort On Every Ride" }
                        ]
                    },
                    {
                        title: "Amsterdam 2018 országúti kerékpár szürke",
                        sections: [
                            { label: "headline4", text: "Discover the Ultimate in Road Performance" },
                            { label: "subHeadline4", text: "Engineered for speed and effortless control" }
                        ]
                    },
                    {
                        title: "Amsterdam 2018 országúti kerékpár fekete",
                        sections: [
                            { label: "subHeadline4", text: "Experience precision engineering and sleek design" },
                            { label: "headline4", text: "Unleash Your Inner Cyclist Today" }
                        ]
                    },
                    {
                        title: "Amsterdam 2018 országúti-kerékpár-alumínium-sötét",
                        sections: [
                            { label: "subHeadline4", text: "Lightweight design ensures effortless handling" },
                            { label: "headline4", text: "Experience Speed with Unmatched Precision" }
                        ]
                    },
                    {
                        title: "Amsterdam 2018 országúti-kerékpár-alumínium-fehér",
                        sections: [
                            { label: "headline4", text: "Experience Ultimate Comfort On Every Ride" },
                            { label: "subHeadline4", text: "Lightweight design with superior handling and control" }
                        ]
                    },
                    {
                        title: "Amsterdam 2018 országúti-kerékpár-alumínium-zöld",
                        sections: [
                            { label: "subHeadline4", text: "Lightweight Design Meets Durable Performance" },
                            { label: "headline4", text: "Conquer Roads With Precision And Style" }
                        ]
                    },
                    {
                        title: "Amsterdam 2020 országúti kerékpár - piros",
                        sections: [
                            { label: "subHeadline4", text: "Streamlined build for effortless acceleration" },
                            { label: "headline4", text: "Experience Unmatched Speed and Agility" }
                        ]
                    },
                    {
                        title: "Amsterdam 2020 országúti kerékpár alumínium - lila",
                        sections: [
                            { label: "headline4", text: "Discover the Freedom of Speed and Comfort" },
                            { label: "subHeadline4", text: "Engineered for efficiency and ultimate comfort" }
                        ]
                    },
                    {
                        title: "Amsterdam 2020 országúti kerékpár alumínium - dohány",
                        sections: [
                            { label: "subHeadline4", text: "Built for speed and ultimate comfort" },
                            { label: "headline4", text: "Conquer Every Road with Ease" }
                        ]
                    },
                    {
                        title: "Amsterdam 2020 országúti kerékpár alumínium - szürke",
                        sections: [
                            { label: "headline4", text: "Experience Unmatched Comfort on Every Ride" },
                            { label: "subHeadline4", text: "Advanced suspension and ergonomic seating" }
                        ]
                    },
                    {
                        title: "Amsterdam 2020 országúti kerékpár alumínium - fehér",
                        sections: [
                            { label: "subHeadline4", text: "Advanced engineering for smooth and efficient rides" },
                            { label: "headline4", text: "Pedal Effortlessly With Enhanced Performance" }
                        ]
                    },
                    {
                        title: "Amsterdam classic 2020 női városi kerékpár - lila",
                        sections: [
                            { label: "headline4", text: "Ride in Style with Timeless Elegance" },
                            { label: "subHeadline4", text: "Experience unmatched comfort and smooth city rides" }
                        ]
                    },
                    {
                        title: "Amsterdam classic 2020 női városi kerékpár - barna",
                        sections: [
                            { label: "headline4", text: "Effortless Riding With Timeless Style" },
                            { label: "subHeadline4", text: "Experience comfort with a classic touch" }
                        ]
                    },
                    {
                        title: "Amsterdam classic 2020 női városi kerékpár - kék",
                        sections: [
                            { label: "headline4", text: "Effortless Riding Through City Streets" },
                            { label: "subHeadline4", text: "Enjoy a smooth, comfortable journey every time" }
                        ]
                    },
                    {
                        title: "Amsterdam classic 2020 női városi kerékpár - zöld",
                        sections: [
                            { label: "headline4", text: "Ride in Style with a Timeless Design" },
                            { label: "subHeadline4", text: "Experience unmatched comfort and smooth city rides" }
                        ]
                    }
                ]
            };
        }
    

export default ProductPanel
