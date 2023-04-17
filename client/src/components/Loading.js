import React from 'react'

export default function Loading() {
    return (
        <div className='text-center'>
            <div className="spinner-border text-info" role="status" style={{ height: '110px', width: '110px', marginTop: '200px' }}>
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}
