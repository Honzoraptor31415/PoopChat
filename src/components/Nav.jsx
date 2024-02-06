import { useState } from "react"

function Nav() {
  const [darkTheme, setDarkTheme] = useState(false)
  return (
    <>
      <nav id="desktop">
        <div className="theme-switch">
          <p className="theme-indicator">Dark theme: {darkTheme ? "ON" : "OFF"}</p>
          <div className="checkbox-wrapper-7">
            <input className="tgl tgl-ios" id="cb2-7" type="checkbox" onChange={(e) => {
              if (e.target.checked) {
                setDarkTheme(true)
              } else {
                setDarkTheme(false)
              }
            }} />
            <label className="tgl-btn" htmlFor="cb2-7" />
          </div>
        </div>
        <a href="/" className="no-select logo-text">PoopChat!</a>
        <div className="user-info">
          <img src="https://lh3.googleusercontent.com/ogw/ANLem4bi7UFPAOsFd_YAIfyUcTRGCWCw2h2qGS0X2u9R=s64-c-mo" className="pfp" />
        </div>
      </nav>
    </>
  )
}

export default Nav