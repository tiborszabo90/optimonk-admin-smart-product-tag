import React from 'react'
import { Link } from 'react-router-dom'

function DevStart() {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            fontFamily: 'Roboto, sans-serif',
            background: '#f1f2f4',
            gap: '24px'
        }}>
            <h1 style={{ fontSize: '24px', fontWeight: 700, color: '#23262a', margin: 0 }}>
                Dev Start
            </h1>
            <div style={{ display: 'flex', gap: '16px' }}>
                <Link
                    to="/v1/53722/settings/smart-product-tag-edit/699edcbfdb8587b4c75fa42f"
                    style={{
                        padding: '12px 32px',
                        background: '#fff',
                        border: '2px solid #e3e5e8',
                        borderRadius: '8px',
                        fontSize: '16px',
                        fontWeight: 600,
                        color: '#23262a',
                        textDecoration: 'none',
                        cursor: 'pointer',
                    }}
                >
                    V1
                </Link>
                <Link
                    to="/v2/53722/settings/smart-product-tag-edit/699edcbfdb8587b4c75fa42f"
                    style={{
                        padding: '12px 32px',
                        background: '#fff',
                        border: '2px solid #e3e5e8',
                        borderRadius: '8px',
                        fontSize: '16px',
                        fontWeight: 600,
                        color: '#23262a',
                        textDecoration: 'none',
                        cursor: 'pointer',
                    }}
                >
                    V2
                </Link>
                <Link
                    to="/v2-0-generated/53722/settings/smart-product-tag-edit/699edcbfdb8587b4c75fa42f"
                    style={{
                        padding: '12px 32px',
                        background: '#fff',
                        border: '2px solid #e3e5e8',
                        borderRadius: '8px',
                        fontSize: '16px',
                        fontWeight: 600,
                        color: '#23262a',
                        textDecoration: 'none',
                        cursor: 'pointer',
                    }}
                >
                    V2 – 0 generated
                </Link>
            </div>
        </div>
    )
}

export default DevStart
