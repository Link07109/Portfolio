import React, { memo } from 'react'
import { MemoryRouter, Routes, Route } from 'react-router-dom';

import Page from './Pages/Page'
import Home from './Pages/Home'
import Project from './Pages/Project'
import About from './Pages/About'
import Page404 from './Pages/Page404'

const App = () => {

    return (
        <React.StrictMode>
            <MemoryRouter>
                <Routes>
                    <Route path='/' element={<Page />} >
                        <Route index='true' element={<Home />} />
                        <Route path='/project' element={<Project />} />
                        <Route path='/about' element={<About />} />
                        <Route path='*' element={<Page404 />} />
                    </Route>
                </Routes>
            </MemoryRouter>
        </React.StrictMode>
    )
}

export default memo(App)