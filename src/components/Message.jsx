import { useState, useEffect } from "react"
import { supabase } from "../supabaseClient"

function Message({ sentBy, timestamp, text, pfpUrl }) {
  const [user, setUser] = useState()
  async function getUser() {
    const { data: { user } } = await supabase.auth.getUser()
    setUser(user)
  }
  useEffect(() => {
    getUser()
  }, [])
  return (
    <div id={timestamp} className={user ? `message message-${sentBy === user.user_metadata.name ? "me" : "someone"}` : `message`}>
      <div className="message-top">
        <img className="no-select" src={pfpUrl} />
        <p className="message-username">{sentBy}</p>
      </div>
      <p className="message-text">{text}</p>
    </div>
  )
}

export default Message