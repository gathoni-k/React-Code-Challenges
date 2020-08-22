import React, {useContext} from 'react'
import "./Button.css"
import ThemeContext from './context/ThemeContext'
import sun from './sun.svg'
import moon from './moon.svg'

export default () => {
  const {mode, toggleMode} = useContext(ThemeContext)
  const handleClick = () => {
    toggleMode()
    let root = document.documentElement;
    if (mode === "light") {
      root.classList.add("dark-mode")
    } else {
      root.classList.remove("dark-mode")
    }
  }
  return (
    <div className="toggle-btn">
    <button onClick={handleClick} style={{
      backgroundColor:mode === "light"?'transparent':'#eeeeee'
    }} className="toggle-btn"><img src={mode === "light"?sun:moon} alt="logo" className="mode-img"/></button>
    </div>
  )
}
