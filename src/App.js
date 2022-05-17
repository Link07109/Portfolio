import React, { memo } from 'react'
import { MemoryRouter, Routes, Route } from 'react-router-dom';

import Page from './Pages/Page'
import Home from './Pages/Home'
import Projects from './Pages/Projects'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Page404 from './Pages/Page404'

const App = () => {

    // const routes = [{
    //     path: '/', element: <Page />,
    //     children: [
    //         { index: true, element: <Home /> },
    //         { path: '/Portfolio', element: <Home /> },

    //         { path: '/projects', element: <Projects /> },
    //         { path: '/about', element: <About /> },
    //         { path: '/contact', element: <Contact /> },

    //         { path: '*', element: <Page404 /> },
    //     ]
    // }]

    return (
        <MemoryRouter>
            <Routes>
                <Route path='/' element={<Page />} >
                    <Route index='true' element={<Home />} />

                    <Route path='/projects' element={<Projects />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contact' element={<Contact />} />

                    <Route path='*' element={<Page404 />} />
                </Route>
            </Routes>
        </MemoryRouter>
    )
}

export default memo(App)