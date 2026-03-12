import React from 'react'
import { UilAngleLeft, UilAngleRight, UilExclamationCircle } from '@iconscout/react-unicons'


        type Preview = {
            title: string;
            price: string;
            sku: string;
            stock: string;
            subHeadline4: string;
            headline4: string;
        }

        type ProductPanelData = {
            previews: Preview[];
        }

// Component

        const PAGE_SIZE = 10;

        function ProductPanelV4({
            dataId,
            onSelectionChange,
            generatedCount = 0,
            hasModified = false,
            page,
            onPage
        }: {
            dataId: string;
            onSelectionChange?: (count: number) => void;
            generatedCount?: number;
            hasModified?: boolean;
            page: number;
            onPage: (p: number) => void;
        }) {
            const { previews }: ProductPanelData = getProductPanelData(dataId);
            const [selectedIds, setSelectedIds] = React.useState<Set<number>>(new Set());

            const totalPages = Math.ceil(previews.length / PAGE_SIZE);
            const pageStart = (page - 1) * PAGE_SIZE;
            const pagePreviews = previews.slice(pageStart, pageStart + PAGE_SIZE);

            const handleToggle = (index: number, selected: boolean) => {
                setSelectedIds(prev => {
                    const next = new Set(prev);
                    selected ? next.add(index) : next.delete(index);
                    onSelectionChange?.(next.size);
                    return next;
                });
            };

            return (
                <div data-v-716c1e5e={""} className={"panel-content preview-content"} style={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={{ flex: 1 }}>
                        {pagePreviews.map((preview, i) => {
                            const index = pageStart + i;
                            return (
                                <ProductPreview
                                    key={index}
                                    title={preview.title}
                                    price={preview.price}
                                    sku={preview.sku}
                                    stock={preview.stock}
                                    subHeadline4={preview.subHeadline4}
                                    headline4={preview.headline4}
                                    generated={index < generatedCount}
                                    stale={index < generatedCount && hasModified}
                                    onToggle={(selected) => handleToggle(index, selected)}
                                />
                            );
                        })}
                    </div>
                    <Paginator page={page} totalPages={totalPages} total={previews.length} onPage={onPage} />
                </div>
            );
        }


// Subcomponents

        function ProductPreview({
            title,
            price,
            sku,
            stock,
            subHeadline4,
            headline4,
            generated = false,
            stale = false,
            onToggle
        }: {
            title: string;
            price: string;
            sku: string;
            stock: string;
            subHeadline4: string;
            headline4: string;
            generated?: boolean;
            stale?: boolean;
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
                    style={{ padding: '12px' }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div style={{ width: '56px', height: '56px', borderRadius: '6px', flexShrink: 0, background: '#e3e5e8' }} />
                        <div style={{ minWidth: 0, flex: 1 }}>
                            <div data-v-716c1e5e={""} className={"product-title"} style={{ fontSize: '13px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                {title}
                            </div>
                            <div style={{ marginTop: '4px', fontSize: '12px', color: '#505763', display: 'flex' }}>
                                <span style={{ width: '100px', flexShrink: 0 }}>{price}</span>
                                <span style={{ width: '100px', flexShrink: 0 }}>{sku}</span>
                                <span style={{ width: '100px', flexShrink: 0 }}>{stock}</span>
                            </div>
                        </div>
                    </div>
                    {generated && (
                        <>
                            <div style={{ borderTop: '1px solid #e3e5e8', margin: '10px 0' }} />
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                                <div style={{ fontSize: '13px', color: '#8c939f', fontWeight: 500 }}>headline4</div>
                                <div style={{ fontSize: '14px', color: '#23262a', marginBottom: '6px' }}>{headline4}</div>
                                <div style={{ fontSize: '13px', color: '#8c939f', fontWeight: 500 }}>subHeadline4</div>
                                <div style={{ fontSize: '14px', color: '#23262a' }}>{subHeadline4}</div>
                            </div>
                        </>
                    )}
                </div>
            );
        }


        function Paginator({
            page,
            totalPages,
            total,
            onPage
        }: {
            page: number;
            totalPages: number;
            total: number;
            onPage: (p: number) => void;
        }) {
            return (
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '12px', fontSize: '14px', color: '#505763' }}>
                    <span>{total} termék</span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <button className="paginator-btn" disabled={page === 1} onClick={() => onPage(page - 1)}>
                            <UilAngleLeft size={24} color={page === 1 ? '#d5d8dd' : '#505763'} />
                        </button>
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
                            <button
                                key={p}
                                className="paginator-btn"
                                style={{ background: p === page ? 'rgba(185,190,198,0.4)' : undefined, fontSize: '14px', fontWeight: 500 }}
                                onClick={() => onPage(p)}
                            >
                                {p}
                            </button>
                        ))}
                        <button className="paginator-btn" disabled={page === totalPages} onClick={() => onPage(page + 1)}>
                            <UilAngleRight size={24} color={page === totalPages ? '#d5d8dd' : '#505763'} />
                        </button>
                    </div>
                </div>
            );
        }


        function getProductPanelData(id: string): ProductPanelData {
            return {
                previews: [
                    { title: "Amsterdam 2019 országúti kerékpár alumínium - halványkék", price: "189 990 HUF", sku: "AM19-LB-AL", stock: "In stock", subHeadline4: "Lightweight design with superior handling", headline4: "Discover the Thrill of Effortless Cycling" },
                    { title: "Amsterdam 2019 országúti kerékpár alumínium - lila", price: "189 990 HUF", sku: "AM19-PU-AL", stock: "In stock", subHeadline4: "Designed for smooth and effortless rides", headline4: "Experience Unmatched Comfort and Style" },
                    { title: "Amsterdam 2019 országúti kerékpár alumínium - szürke", price: "189 990 HUF", sku: "AM19-GR-AL", stock: "In stock", subHeadline4: "Engineered for smooth rides and quick maneuvers", headline4: "Experience Unmatched Speed and Comfort" },
                    { title: "Amsterdam 2019 országúti kerékpár alumínium - kék", price: "189 990 HUF", sku: "AM19-BL-AL", stock: "Out of stock", subHeadline4: "Built for performance and durability", headline4: "Unleash Your Inner Cyclist" },
                    { title: "Amsterdam 2020 MTB kerékpár alumínium - fekete/piros", price: "214 990 HUF", sku: "AM20-MTB-BR", stock: "In stock", subHeadline4: "Experience lightweight design and superior handling", headline4: "Conquer Trails with Unmatched Agility" },
                    { title: "Amsterdam 2018 országúti kerékpár fehér", price: "174 990 HUF", sku: "AM18-WH", stock: "In stock", subHeadline4: "Engineered for smooth and effortless cycling", headline4: "Experience Ultimate Comfort on Every Ride" },
                    { title: "Amsterdam 2018 országúti kerékpár szürke", price: "174 990 HUF", sku: "AM18-GR", stock: "In stock", subHeadline4: "Engineered for speed and effortless control", headline4: "Discover the Ultimate in Road Performance" },
                    { title: "Amsterdam 2018 országúti kerékpár fekete", price: "174 990 HUF", sku: "AM18-BK", stock: "Out of stock", subHeadline4: "Experience precision engineering and sleek design", headline4: "Unleash Your Inner Cyclist Today" },
                    { title: "Amsterdam 2018 országúti-kerékpár-alumínium-sötét", price: "179 990 HUF", sku: "AM18-DK-AL", stock: "In stock", subHeadline4: "Lightweight design ensures effortless handling", headline4: "Experience Speed with Unmatched Precision" },
                    { title: "Amsterdam 2018 országúti-kerékpár-alumínium-fehér", price: "179 990 HUF", sku: "AM18-WH-AL", stock: "In stock", subHeadline4: "Lightweight design with superior handling and control", headline4: "Experience Ultimate Comfort on Every Ride" },
                    { title: "Amsterdam 2018 országúti-kerékpár-alumínium-zöld", price: "179 990 HUF", sku: "AM18-GN-AL", stock: "In stock", subHeadline4: "Lightweight design meets durable performance", headline4: "Conquer Roads with Precision and Style" },
                    { title: "Amsterdam 2020 országúti kerékpár - piros", price: "199 990 HUF", sku: "AM20-RD", stock: "In stock", subHeadline4: "Streamlined build for effortless acceleration", headline4: "Experience Unmatched Speed and Agility" },
                    { title: "Amsterdam 2020 országúti kerékpár alumínium - lila", price: "204 990 HUF", sku: "AM20-PU-AL", stock: "Out of stock", subHeadline4: "Engineered for efficiency and ultimate comfort", headline4: "Discover the Freedom of Speed and Comfort" },
                    { title: "Amsterdam 2020 országúti kerékpár alumínium - dohány", price: "204 990 HUF", sku: "AM20-TN-AL", stock: "In stock", subHeadline4: "Built for speed and ultimate comfort", headline4: "Conquer Every Road with Ease" },
                    { title: "Amsterdam 2020 országúti kerékpár alumínium - szürke", price: "204 990 HUF", sku: "AM20-GR-AL", stock: "In stock", subHeadline4: "Advanced suspension and ergonomic seating", headline4: "Experience Unmatched Comfort on Every Ride" },
                    { title: "Amsterdam 2020 országúti kerékpár alumínium - fehér", price: "204 990 HUF", sku: "AM20-WH-AL", stock: "In stock", subHeadline4: "Advanced engineering for smooth and efficient rides", headline4: "Pedal Effortlessly with Enhanced Performance" },
                    { title: "Amsterdam classic 2020 női városi kerékpár - lila", price: "194 990 HUF", sku: "AMC20-PU-W", stock: "In stock", subHeadline4: "Experience unmatched comfort and smooth city rides", headline4: "Ride in Style with Timeless Elegance" },
                    { title: "Amsterdam classic 2020 női városi kerékpár - barna", price: "194 990 HUF", sku: "AMC20-BR-W", stock: "In stock", subHeadline4: "Experience comfort with a classic touch", headline4: "Effortless Riding with Timeless Style" },
                    { title: "Amsterdam classic 2020 női városi kerékpár - kék", price: "194 990 HUF", sku: "AMC20-BL-W", stock: "Out of stock", subHeadline4: "Enjoy a smooth, comfortable journey every time", headline4: "Effortless Riding Through City Streets" },
                    { title: "Amsterdam classic 2020 női városi kerékpár - zöld", price: "194 990 HUF", sku: "AMC20-GN-W", stock: "In stock", subHeadline4: "Experience unmatched comfort and smooth city rides", headline4: "Ride in Style with a Timeless Design" },
                    { title: "Amsterdam 2021 országúti kerékpár alumínium - narancs", price: "219 990 HUF", sku: "AM21-OR-AL", stock: "In stock", subHeadline4: "Bold design meets exceptional road performance", headline4: "Stand Out on Every Road" },
                    { title: "Amsterdam 2021 országúti kerékpár alumínium - sárga", price: "219 990 HUF", sku: "AM21-YL-AL", stock: "In stock", subHeadline4: "Vibrant style with precision engineering", headline4: "Ride Bright, Ride Fast" },
                    { title: "Amsterdam 2021 MTB kerékpár alumínium - zöld", price: "234 990 HUF", sku: "AM21-MTB-GN", stock: "Out of stock", subHeadline4: "Built for rugged terrain and smooth trails", headline4: "Conquer Every Path with Confidence" },
                    { title: "Amsterdam 2021 MTB kerékpár alumínium - kék", price: "234 990 HUF", sku: "AM21-MTB-BL", stock: "In stock", subHeadline4: "Engineered for off-road adventures", headline4: "Take on the Trail with Power" },
                    { title: "Amsterdam classic 2021 városi kerékpár - krém", price: "209 990 HUF", sku: "AMC21-CR", stock: "In stock", subHeadline4: "Timeless design for effortless city commutes", headline4: "Classic Comfort for Modern Streets" },
                    { title: "Amsterdam classic 2021 városi kerékpár - menta", price: "209 990 HUF", sku: "AMC21-MT", stock: "In stock", subHeadline4: "Fresh style meets smooth city riding", headline4: "Refresh Your Daily Commute" },
                    { title: "Amsterdam 2022 országúti kerékpár karbon - fekete", price: "289 990 HUF", sku: "AM22-BK-CB", stock: "In stock", subHeadline4: "Ultra-lightweight carbon frame for peak performance", headline4: "Feel the Power of Carbon Engineering" },
                    { title: "Amsterdam 2022 országúti kerékpár karbon - fehér", price: "289 990 HUF", sku: "AM22-WH-CB", stock: "Out of stock", subHeadline4: "Precision crafted for speed and agility", headline4: "Ride Faster with Carbon Precision" },
                    { title: "Amsterdam 2022 elektromos kerékpár - szürke", price: "499 990 HUF", sku: "AM22-EL-GR", stock: "In stock", subHeadline4: "Powerful electric assist for effortless rides", headline4: "Go Further with Electric Power" },
                    { title: "Amsterdam 2022 elektromos kerékpár - fekete", price: "499 990 HUF", sku: "AM22-EL-BK", stock: "In stock", subHeadline4: "Smart electric drive for city and beyond", headline4: "Electrify Your Every Journey" },
                    { title: "Amsterdam junior 2021 kerékpár - piros", price: "89 990 HUF", sku: "AMJ21-RD", stock: "In stock", subHeadline4: "Safe and fun for young riders", headline4: "Start the Adventure Early" },
                    { title: "Amsterdam junior 2021 kerékpár - kék", price: "89 990 HUF", sku: "AMJ21-BL", stock: "In stock", subHeadline4: "Durable design for active young cyclists", headline4: "Built for Little Champions" },
                    { title: "Amsterdam junior 2021 kerékpár - rózsaszín", price: "89 990 HUF", sku: "AMJ21-PK", stock: "Out of stock", subHeadline4: "Lightweight and easy to handle", headline4: "Ride with Joy Every Day" },
                    { title: "Amsterdam trekking 2022 kerékpár - olívazöld", price: "244 990 HUF", sku: "AM22-TR-OL", stock: "In stock", subHeadline4: "Versatile trekking bike for any terrain", headline4: "Explore Every Road and Trail" },
                ]
            };
        }


export default ProductPanelV4
