import React from 'react'
import $ from 'jquery';

const Filter = ({statusHandler}) => {

    return (
        <>
            <div className="filter">
                <p className='text-center filter-title'>
                    <i className="fa-solid fa-sliders me-1"></i> Filter your items :
                </p>
                <div className="filter-control d-flex justify-content-center">
                    <h6 onClick={statusHandler} className='mx-1 active-btn'>All</h6>
                    <h6 onClick={statusHandler} className='mx-1'>Completed</h6>
                </div>
            </div>
        </>
    )
}

export default Filter