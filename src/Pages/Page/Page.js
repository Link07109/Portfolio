import React, { Suspense } from 'react'
import { Outlet } from "react-router-dom"

import ThemeContextWrapper from '../../Contexts/ThemeContextWrapper';

const NavBar = React.lazy(() => import('../../Components/NavBar'))
const Footer = React.lazy(() => import('../../Components/Footer'))

const Page = props => {
    return (
        <ThemeContextWrapper>
            <Suspense fallback={<h1 className='center-container' style={{minHeight: `100vh`}}>Loading...</h1>}>
                
                <NavBar />
                
                <main className="scrollable-main">
                    <div className='center-container'>

                        <Outlet />

                        <Footer />

                    </div>
                </main>
                
            </Suspense>
        </ThemeContextWrapper>
    )
}

export default Page