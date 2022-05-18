import React, { memo } from 'react'

const Home = () => {

    return (
        <>
            <h1 className='fancy-big-text'>Ivan Valadez</h1>
            
            <h2>Computer Science Student at UNC Charlotte</h2>

            {/* <p>Some text here <strong className='fancy-link'>Maybe.</strong></p> */}
        </>
    )
}

export default memo(Home)