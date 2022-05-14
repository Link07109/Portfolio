import React, { Suspense } from 'react'

const NavBar = React.lazy(() => import('../../Components/NavBar'))
const Footer = React.lazy(() => import('../../Components/Footer'))
const Card = React.lazy(() => import('../../Components/Card/Card'))

const Projects = props => {
    return (
        <Suspense fallback={<h1 className='center-container' style={{minHeight: `100vh`}}>Loading...</h1>}>
            
            <NavBar />
            
            <main className="scrollable-main">
                <div className='center-container'>
                    <h2>Projects</h2>
                    <h3><a href="#game-dev">Game Dev</a> | <a href="#web-dev">Web Dev</a></h3>

                    <div id="game-dev" className='card-grid'>
                        <Card title="Guardian of the Forest" description="2D Metroidvania Game made with GameMaker Studio" link="https://github.com/Link07109/Guardian-of-the-Forest" />
                    </div>

                    <div style={{height: "300vh"}}></div>

                    <div id="web-dev" className='card-grid'>
                        <Card title="FalconScouter" description="Mobile App written in React Native" link="https://github.com/Link07109/Falcon-Scouter" />
                    </div>

                </div>
            </main>

            <Footer />

        </Suspense>
    )
}

export default Projects;