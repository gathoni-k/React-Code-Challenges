import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import './Theme.css'
import Button from './Button'
import ThemeContext from './context/ThemeContext'

function App () {
  const [mode, setmode] = useState('light')
  const toggleMode = () => {
    setmode((mode) => {
      mode === 'light' ? setmode('dark') : setmode('light')
    })
  }

  return (
    <ThemeContext.Provider
      value={{
        mode,
        toggleMode
      }}
    >
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            Learn React
          </a>
        </header>
        <Button />
      </div>
    </ThemeContext.Provider>
  )
}

export default App
