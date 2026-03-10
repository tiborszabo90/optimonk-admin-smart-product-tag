import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import { useLocation } from 'react-router-dom'


// Component
function InstructionTextarea() {
    return <textarea placeholder={"Írja be az utasításait ide..."} rows={"12"} className={"form-control design-system"}>
        {`General requirements
        • Write only in English and use language that appeals to all genders.
        • If a headline4 is a single sentence, omit the final period.
        • Begin every headline4 with a capital letter, then capitalize further words only as grammar requires.
        • Do not mention the product name in any form
        
        Headline guidelines
        • Use 5–8 words.
        • Write a declarative sentence, not an imperative command.
        • Highlight one standout feature, benefit, or attribute.
        
        Subheadline4 guidelines
        • Use 6–10 words.
        • Complement the headline4 by presenting one or two additional facts, features, or benefits.
        • Keep it short and concise.`}
    </textarea>}


export default InstructionTextarea
