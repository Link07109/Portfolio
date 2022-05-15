import React, { Suspense } from 'react'

const NavBar = React.lazy(() => import('../../Components/NavBar'))
const Footer = React.lazy(() => import('../../Components/Footer'))

const Home = props => {
    return (
        <Suspense fallback={<h1 className='center-container' style={{minHeight: `100vh`}}>Loading...</h1>}>
            
            <NavBar />
            
            <main className="scrollable-main">
                <div className='center-container'>

                    <h1 className='fancy-big-text'>Ivan Valadez</h1>

                    <img style={{borderRadius: "50%"}} width="400px" height="400px" src="https://cdn.discordapp.com/attachments/831304128033587270/974915746121547846/test.jfif" alt="me"></img>
                    <h2 className='fancy-link'>RIP Cool Component</h2>

                    <p>Random text here for you to <strong className='fancy-link'>Fuck With.</strong></p>

                    <Footer />

                </div>
            </main>
            
        </Suspense>
    )
}

export default Home