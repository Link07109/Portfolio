import React from 'react'
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'

import Page from './Pages/Page'
import Home from './Pages/Home'
import Projects from './Pages/Projects'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Page404 from './Pages/Page404'

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/Portfolio' element={<Page />}>
                    <Route index element={<Home />} />
                    <Route path='projects' element={<Projects />} />
                    <Route path='about' element={<About />} />
                    <Route path='contact' element={<Contact />} />
                    <Route path='*' element={<Page404 />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(<App />)