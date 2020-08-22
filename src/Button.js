import React from 'react'
import "./Button.css"
import sun from './sun.svg'

export default () => {
  return (
    <div className="toggle-btn">
    <button className="toggle-btn"><img src={sun} alt="mode" className="mode-img"/></button>
    </div>
  )
}
