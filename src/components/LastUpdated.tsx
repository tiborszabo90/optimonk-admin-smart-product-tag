import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'


// Component

        function LastUpdated({
            date
        }: {
            date: string;
        }) {
            return (
                <div data-v-716c1e5e={""} className={"last-updated"}>
                    Utoljára szerkesztve: {date}
                </div>
            );
        }
    

export default LastUpdated
