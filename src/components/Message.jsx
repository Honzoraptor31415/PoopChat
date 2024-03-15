import { useState, useEffect } from "react"
import { supabase } from "../supabaseClient"

function Message({ sentBy, timestamp, text, pfpUrl, sentByEmail, userLastPooped }) {
  const [user, setUser] = useState()
  const [pooped, setPooped] = useState()
  async function getUser() {
    const { data: { user } } = await supabase.auth.getUser()
    setUser(user)
  }

  async function poop(u) {
    const { error } = await supabase.from("users").update({ lastGotPooped: new Date().getTime() }).eq("userEmail", sentByEmail)
    setPooped(u)
  }

  useEffect(() => {
    getUser()
    document.getElementById(`${timestamp}-bottom`).scrollIntoView()
  }, [])

  return (
    <>
      <div id={timestamp} className={user ? `message message-${sentByEmail === user.email ? "me" : "someone"}` : `message`}>
        <div className="message-top">
          <div className="message-user-info">
            <img className="no-select" src={pfpUrl} />
            <p className="message-username">{sentBy}</p>
          </div>
          <p className="message-date">{`${new Date(timestamp).toLocaleDateString("de-DE")} ${new Date(timestamp).getHours()}:${new Date(timestamp).getMinutes()}`}</p>
          {user && (
            <>
              {sentByEmail === user.email ? "" : <button disabled={pooped && true} onClick={() => { poop(sentBy) }} className="poop-btn">{pooped ? `${pooped.length <= 9 ? `You pooped ${pooped}` : "You pooped this user"}` : <>{sentBy.length <= 9 ? `Poop ${sentBy}` : "Poop this user"}</>} </button>}
            </>
          )}
        </div>
        <p className="message-text">{text}</p>
      </div>
      <div id={`${timestamp}-bottom`} style={{ visibility: "hidden" }}></div>
    </>
  )
}

export default Message