import React from 'react'
import * as ReactDOM from 'react-dom/client';
import ThemeContextWrapper from './Contexts/ThemeContextWrapper';

import './index.css'
import Home from './Pages/Home'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <ThemeContextWrapper>
        <React.StrictMode>
            <Home cool="COOL" headerText="Home" />
        </React.StrictMode>
    </ThemeContextWrapper>   
)