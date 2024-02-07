import { useState, useEffect } from "react"
import { supabase } from "../supabaseClient"
import Message from "./Message"
import Nav from "./Nav"

function Chat() {
  const inputPlaceholders = ["Feel free to start typing", "You can type here", "Write your message", "Your message goes here!", "May you pls start typing?", "Write something", "Bing chilling", "Start typing..."]
  const [message, setMessage] = useState("")
  const [user, setUser] = useState()
  const [messages, setMessages] = useState()
  const [msgError, setMsgError] = useState()
  const [meFadeAway, setMeFadeAway] = useState(false)

  async function send() {
    if (message.length <= 400) {
      const { error } = await supabase
        .from('messages')
        .insert({
          sentBy: user.user_metadata.name,
          sentByEmail: user.email,
          pfpUrl: user.user_metadata.avatar_url,
          text: message,
          userid: user.id,
          timestamp: new Date().getTime()
        })
      console.log(error)
    } else {
      setMeFadeAway()
      setMsgError("Message is tooooo long.")
      setTimeout(() => {
        setMeFadeAway(true)
      }, 1800)
      setTimeout(() => {
        setMsgError("")
      }, 2000)
    }
  }

  function scrollToBottom() {
    const msgTimestamps = []
    for (let i = 0; i < messages.length; i++) {
      msgTimestamps.push(messages[i].timestamp)
    }
    document.getElementById(Math.max(...msgTimestamps)).scrollIntoView()
  }

  async function getData() {
    const res = await supabase.from('messages').select("*").gt("timestamp", new Date().getTime() - 36_000_000)
    setMessages(res.data)
    console.log(res.data)
    console.log(res.error)
  }

  async function getUser() {
    const { data: { user } } = await supabase.auth.getUser()
    setUser(user)
  }

  const handleInserts = (payload) => {
    console.log('Change received!', payload.new)
    setMessages((prevMessages) => [...prevMessages, payload.new])
  }

  supabase.channel('messages').on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'messages' }, handleInserts).subscribe()

  async function deleteOldMessages() {
    const { error } = await supabase.from('messages').delete().lt("timestamp", new Date().getTime() - 36_000_000)
    console.log(error)
  }

  const checkEmptyMessage = msg => !msg.replace(/\s/g, '').length

  useEffect(() => {
    getData()
    getUser()
    deleteOldMessages()
  }, [])

  return (
    <>
      <Nav />
      {msgError ? <p className="msg-error" style={meFadeAway ? { right: "-100vw" } : {}} >{msgError}</p> : ""}
      <div className="container">
        <div id="chat" className="chat">
          <div className="messages-wrp">
            {messages ? (
              <>
                {messages.length > 0 ? (
                  <>
                    {messages.map(value => {
                      return (
                        <Message key={value.id} text={value.text} sentBy={value.sentBy} timestamp={value.timestamp} pfpUrl={value.pfpUrl} sentByEmail={value.sentByEmail} />
                      )
                    })}
                  </>
                ) : (
                  <div className="no-messages">
                    <p className="no-messages-text no-select">No messages were sent in the past 10 hours.</p>
                  </div>
                )}
              </>
            ) : ""}
          </div>
          <div className="chat-ctrls">
            <div className={`input-wrp ${checkEmptyMessage(message) ? "input-wrp-cant-send" : "input-wrp-can-send"}`}>
              <div className="input-pfp-btn">
                <img className="input-pfp-img no-select" src={user ? user.user_metadata.avatar_url : ""} />
              </div>
              <input id="message-input" placeholder={inputPlaceholders[Math.floor(Math.random() * inputPlaceholders.length)]} type="text" onChange={(e) => { setMessage(e.target.value) }} value={message} />
            </div>
            {checkEmptyMessage(message) ? "" : <button onClick={send}>Submit</button>}
          </div>
        </div>
      </div>
    </>
  )
}

export default Chat