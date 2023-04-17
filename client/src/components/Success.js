import React from 'react'

export default function Success({ success }) {
    return (
        <div>
            <div className="alert alert-primary" role="alert">
                {success}
            </div>
        </div>
    )
}
