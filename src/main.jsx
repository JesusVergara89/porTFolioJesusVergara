import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import Portfolio from './Portfolio.jsx'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
    <HashRouter>
      <Portfolio />
    </HashRouter>
)
