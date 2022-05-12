import React, { Suspense } from 'react'

const Card = React.lazy(() => import('../../Components/Card/Card'))
const NavBar = React.lazy(() => import('../../Components/NavBar'))
const CoolComponent = React.lazy(() => import('../../Components/CoolComponent'))

const Home = props => {
    return (
        <Suspense fallback={<h1 className='center' style={{minHeight: `100vh`}}>Loading...</h1>}>
            
            <NavBar headerText={props.headerText} />
            
            <main className="scrollable-main">
                <div className='center-container'>
                    <h1 className='fancy-big-text'>Ivan Valadez</h1>
                    <CoolComponent cool={props.cool} />

                    <div className='card-flexbox'>
                    {/* <div className='card-grid'> */}
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </div>

                    <p>Random text here for you to <strong className='fancy-link'>Fuck With.</strong></p>
                </div>
            </main>
            
            
        </Suspense>
    )
}

export default Home