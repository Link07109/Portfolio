import React from 'react'

const Home = () => {

    return (
        <>
            <img style={{borderRadius: '50%', marginTop: '2em'}}
                width='200em'
                height='200em'
                src='https://cdn.discordapp.com/attachments/831304128033587270/974915746121547846/test.jfif'
                alt='me'>
            </img>
            <h1 className='fancy-big-text'>Ivan Valadez</h1>
            
            <h2>Computer Science Student at UNC Charlotte</h2>

            <p>Random text here for you to <strong className='fancy-link'>Fuck With.</strong></p>
        </>
    )
}

export default Home