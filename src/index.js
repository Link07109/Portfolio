import React from 'react'
import * as ReactDOM from 'react-dom/client';
import ThemeContextWrapper from './Contexts/ThemeContextWrapper';

import './index.css'
import Home from './Pages/Home'
import Projects from './Pages/Projects'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <ThemeContextWrapper>
        <React.StrictMode>
            
            <Home cool="COOL" />
            {/* <Projects /> */}
            
        </React.StrictMode>
    </ThemeContextWrapper>   
)