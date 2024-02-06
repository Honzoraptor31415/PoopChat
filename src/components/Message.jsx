import { useState, useEffect } from "react"
import { supabase } from "../supabaseClient"

function Message({ sentBy, timestamp, text, pfpUrl, sentByEmail }) {
  const [user, setUser] = useState()
  async function getUser() {
    const { data: { user } } = await supabase.auth.getUser()
    setUser(user)
  }
  useEffect(() => {
    getUser()
    document.getElementById(timestamp).scrollIntoView()
  }, [])
  return (
    <div id={timestamp} className={user ? `message message-${sentByEmail === user.email ? "me" : "someone"}` : `message`}>
      <div className="message-top">
        <img className="no-select" src={pfpUrl} />
        <p className="message-username">{sentBy}</p>
      </div>
      <p className="message-text">{text}</p>
    </div>
  )
}

export default Message