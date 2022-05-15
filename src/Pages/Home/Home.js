import React from 'react'

const Home = props => {

    return (
        <React.Fragment>
            <h1 className='fancy-big-text'>Ivan Valadez</h1>

            <img style={{borderRadius: "50%"}} width="400px" height="400px" src="https://cdn.discordapp.com/attachments/831304128033587270/974915746121547846/test.jfif" alt="me"></img>
            <h2 className='fancy-link'>RIP Cool Component</h2>

            <p>Random text here for you to <strong className='fancy-link'>Fuck With.</strong></p>
        </React.Fragment>
    )
}

export default Home