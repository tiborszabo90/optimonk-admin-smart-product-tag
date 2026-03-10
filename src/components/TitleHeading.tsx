import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'


// Component

        function TitleHeading({
            title
        }: {
            title: string;
        }) {
            return (
                <div data-v-716c1e5e={""} className={"d-flex flex-column title-editing mt-1 title-heading-1"}>
                    <div className={"d-flex flex-column title-holder"}>
                        <div data-v-b0ffb60a={""} className={"heading title heading-1 design-system"}>
                            <span data-v-b0ffb60a={""}>
                                {title}
                            </span>
                        </div>
                    </div>
                </div>
            );
        }
    

export default TitleHeading
