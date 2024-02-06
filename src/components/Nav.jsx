import { useEffect, useState } from "react"
import { supabase } from "../supabaseClient"

function Nav() {
  const [darkTheme, setDarkTheme] = useState(false)
  const [user, setUser] = useState()

  async function getUser() {
    const { data: { user } } = await supabase.auth.getUser()
    setUser(user)
  }
  useEffect(() => {
    getUser()
  }, [])
  return (
    <>
      <nav id="desktop">
        <a href="/" className="no-select logo-text">PoopChat!</a>
        <div className="user-info">
          <img src={user ? user.user_metadata.avatar_url : ""} className="pfp" />
        </div>
      </nav>
    </>
  )
}

export default Nav