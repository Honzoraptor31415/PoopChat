import { useState, useEffect } from "react"
import { supabase } from "../supabaseClient"
import Message from "./Message"
import Nav from "./Nav"

function Chat() {
  const inputPlaceholders = ["Feel free to start typing", "You can type here", "Write your message", "Your message goes here!", "May you pls start typing?", "Write something", "Bing chilling", "Start typing..."]
  const [message, setMessage] = useState("")
  const [user, setUser] = useState()
  const [messages, setMessages] = useState()

  async function send() {
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

  useEffect(() => {
    getData()
    getUser()
  }, [])

  return (
    <>
      <Nav />
      <div className="container">
        <svg className="no-select poop-bg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96">
          <path fill="grey" d="M82 64H14a8 8 0 0 0 0 16h68a8 8 0 0 0 0-16zm-60-4h52a8 8 0 0 0 0-16H22a8 8 0 0 0 0 16zm8-20h36a5.971 5.971 0 0 0 6-5.877c.027-5.873-1.848-11.145-5.145-14.457A12.238 12.238 0 0 0 58 16a1.999 1.999 0 0 0-2 2v2a8.01 8.01 0 0 1-8 8H30a6 6 0 0 0 0 12z" />
        </svg>
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
            <div className="input-wrp">
              <div className="input-pfp-btn">
                <img className="input-pfp-img no-select" src={user ? user.user_metadata.avatar_url : ""} />
              </div>
              <input id="message-input" placeholder={inputPlaceholders[Math.floor(Math.random() * inputPlaceholders.length)]} type="text" onChange={(e) => { setMessage(e.target.value) }} value={message} />
            </div>
            <button onClick={send}>Submit</button>
          </div>
        </div>
        <svg className="no-select poop-bg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96">
          <path fill="grey" d="M82 64H14a8 8 0 0 0 0 16h68a8 8 0 0 0 0-16zm-60-4h52a8 8 0 0 0 0-16H22a8 8 0 0 0 0 16zm8-20h36a5.971 5.971 0 0 0 6-5.877c.027-5.873-1.848-11.145-5.145-14.457A12.238 12.238 0 0 0 58 16a1.999 1.999 0 0 0-2 2v2a8.01 8.01 0 0 1-8 8H30a6 6 0 0 0 0 12z" />
        </svg>
      </div>
    </>
  )
}

export default Chat