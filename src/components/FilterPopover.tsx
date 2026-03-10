import React, { useState, useRef, useEffect } from 'react'
import { UilFilter, UilAngleDown, UilCheck, UilTrashAlt, UilFileAlt } from '@iconscout/react-unicons'


function FilterPopover() {
    const [isOpen, setIsOpen] = useState(false)
    const [csvFile, setCsvFile] = useState<{ name: string; productCount: number } | null>(null)
    const wrapperRef = useRef<HTMLDivElement>(null)
    const fileInputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
                setIsOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    function handleImportClick() {
        fileInputRef.current?.click()
    }

    function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
        const file = event.target.files?.[0]
        if (file) {
            setCsvFile({ name: file.name, productCount: 142 })
        }
        event.target.value = ''
    }

    function handleDrop(event: React.DragEvent<HTMLDivElement>) {
        event.preventDefault()
        const file = event.dataTransfer.files?.[0]
        if (file) {
            setCsvFile({ name: file.name, productCount: 142 })
        }
    }

    function handleDragOver(event: React.DragEvent<HTMLDivElement>) {
        event.preventDefault()
    }

    return (
        <div data-v-716c1e5e={""} className={"filter-popover-wrapper"} ref={wrapperRef}>
            <button
                data-v-716c1e5e={""}
                className={"custom-btn"}
                onClick={() => setIsOpen(prev => !prev)}
            >
                <UilFilter size={24} />
            </button>
            {isOpen && (
                <div data-v-716c1e5e={""} className={"filter-popover-menu"}>
                    <div data-v-716c1e5e={""} className={"filter-popover-title"}>
                        Szűrők
                    </div>
                    <div data-v-716c1e5e={""} className={"filter-popover-row"}>
                        <label data-v-716c1e5e={""} className={"filter-popover-label"}>
                            Category is
                        </label>
                        <CustomSelect options={[
                            "All categories",
                            "Országúti kerékpárok",
                            "MTB kerékpárok",
                            "Városi kerékpárok",
                            "Elektromos kerékpárok",
                            "Gyermek kerékpárok",
                            "Kerékpár alkatrészek",
                            "Kerékpár ruházat",
                            "Sisakok & védőfelszerelés",
                            "Táskák & csomagtartók",
                            "Világítás & biztonság",
                            "Szerszámok & karbantartás",
                        ]} />
                    </div>
                    <div data-v-716c1e5e={""} className={"filter-popover-row"}>
                        <label data-v-716c1e5e={""} className={"filter-popover-label"}>
                            Category is not
                        </label>
                        <CustomSelect options={[
                            "All categories",
                            "Országúti kerékpárok",
                            "MTB kerékpárok",
                            "Városi kerékpárok",
                            "Elektromos kerékpárok",
                            "Gyermek kerékpárok",
                            "Kerékpár alkatrészek",
                            "Kerékpár ruházat",
                            "Sisakok & védőfelszerelés",
                            "Táskák & csomagtartók",
                            "Világítás & biztonság",
                            "Szerszámok & karbantartás",
                        ]} />
                    </div>
                    <div data-v-716c1e5e={""} className={"filter-popover-row filter-popover-checkbox-row"}>
                        <CustomCheckbox id="filter-in-stock" label="Only in stock" />
                    </div>
                    <div data-v-716c1e5e={""} className={"filter-popover-row filter-popover-checkbox-row"}>
                        <CustomCheckbox id="filter-traffic" label="Only products with traffic" />
                    </div>
                    <input
                        ref={fileInputRef}
                        type="file"
                        accept=".csv"
                        style={{ display: 'none' }}
                        onChange={handleFileChange}
                    />
                    {csvFile ? (
                        <div data-v-716c1e5e={""} className={"filter-csv-uploaded"}>
                            <UilFileAlt size={20} color="#505763" />
                            <div data-v-716c1e5e={""} className={"filter-csv-info"}>
                                <span data-v-716c1e5e={""} className={"filter-csv-name"}>{csvFile.name}</span>
                                <span data-v-716c1e5e={""} className={"filter-csv-count"}>{csvFile.productCount} termék</span>
                            </div>
                            <button
                                data-v-716c1e5e={""}
                                className={"filter-csv-delete-btn"}
                                type="button"
                                onClick={() => setCsvFile(null)}
                            >
                                <UilTrashAlt size={18} color="#505763" />
                            </button>
                        </div>
                    ) : (
                        <div
                            data-v-716c1e5e={""}
                            className={"filter-drop-area"}
                            onDrop={handleDrop}
                            onDragOver={handleDragOver}
                        >
                            <button data-v-716c1e5e={""} className={"filter-import-csv-btn"} type="button" onClick={handleImportClick}>
                                Import CSV
                            </button>
                            <span data-v-716c1e5e={""} className={"filter-drop-text"}>or drag and drop a CSV file here</span>
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}

function CustomSelect({ options }: { options: string[] }) {
    const [isOpen, setIsOpen] = useState(false)
    const [selected, setSelected] = useState(options[0])
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                setIsOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    return (
        <div data-v-716c1e5e={""} className={"filter-custom-select"} ref={ref}>
            <button
                data-v-716c1e5e={""}
                className={isOpen ? "filter-custom-select-trigger open" : "filter-custom-select-trigger"}
                onClick={() => setIsOpen(prev => !prev)}
                type="button"
            >
                <span data-v-716c1e5e={""} className={"filter-custom-select-value"}>{selected}</span>
                <UilAngleDown size={24} color="#505763" className={isOpen ? "filter-select-arrow open" : "filter-select-arrow"} />
            </button>
            {isOpen && (
                <div data-v-716c1e5e={""} className={"filter-custom-select-menu"}>
                    {options.map(option => (
                        <div
                            key={option}
                            data-v-716c1e5e={""}
                            className={"filter-custom-select-option" + (option === selected ? " selected" : "")}
                            onClick={() => { setSelected(option); setIsOpen(false) }}
                        >
                            {option}
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

function CustomCheckbox({ id, label }: { id: string; label: string }) {
    const [checked, setChecked] = useState(false)
    return (
        <div data-v-716c1e5e={""} className={"filter-custom-checkbox-row"} onClick={() => setChecked(prev => !prev)}>
            <div data-v-716c1e5e={""} className={checked ? "filter-custom-checkbox checked" : "filter-custom-checkbox"}>
                {checked && <UilCheck size={20} color="#fff" />}
            </div>
            <label data-v-716c1e5e={""} className={"filter-popover-checkbox-label"}>
                {label}
            </label>
        </div>
    )
}

export default FilterPopover
