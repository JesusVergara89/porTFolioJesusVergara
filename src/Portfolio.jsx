import React from 'react'
import Header from './components/Header'
import Introduction from './components/Introduction'
import { Route, Routes } from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'

function Portfolio() {

  let previusTittle = document.title

  window.addEventListener('blur', () => {
    previusTittle = document.title
    document.title = 'WAIT, DONT GO!'
  })

  window.addEventListener('focus', () => {
    previusTittle = document.title
    document.title = 'Jesus Manuel Vergara'
  })

  return (
    <div className="Portfolio">
      <Header />

      <Routes>
        <Route path='/'
          element={<Introduction />}
        />

        <Route path='About'
          element={<About />}
        />

        <Route path='Contact'
          element={<Contact/>}
        />
      </Routes>

    </div>
  )
}

export default Portfolio