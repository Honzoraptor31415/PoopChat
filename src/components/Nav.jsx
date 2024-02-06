import { useState } from "react"

function Nav() {
  const [darkTheme, setDarkTheme] = useState(false)
  return (
    <>
      <nav id="desktop">
        <a href="/" className="no-select logo-text">PoopChat!</a>
        <div className="user-info">
          <img src="https://lh3.googleusercontent.com/ogw/ANLem4bi7UFPAOsFd_YAIfyUcTRGCWCw2h2qGS0X2u9R=s64-c-mo" className="pfp" />
        </div>
      </nav>
    </>
  )
}

export default Nav