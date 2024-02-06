import { useState, useEffect } from "react"
import { supabase } from "../supabaseClient"
import Message from "./Message"
import Nav from "./Nav"

function Chat() {
  const inputPlaceholders = ["Feel free to start typing", "You can type here", "Write your message", "Your message goes here!", "May you pls start typing?", "Write something", "Bing chilling", "Start typing..."]
  const [message, setMessage] = useState("")

  const messages = [{
    id: "lkjh7-asHDIklh7bksaghf",
    sentBy: "User",
    timestamp: 1707133384022,
    text: "that's it.",
    pfpUrl: "https://yt3.googleusercontent.com/TAXLCd3uFynuEQAcbyCZkBqzhDEqR1M0eHM0PTjMuJeUzKwUIhqlApDr6ZEe5Zk4yo1oXZZeFg=s176-c-k-c0x00ffffff-no-rj"
  }, {
    id: "lkjh7-asdfůklh7bksaghf",
    sentBy: "User",
    timestamp: 1707206380588,
    text: "the village has a considerable influence on the design of the course is the same as any other party.",
    pfpUrl: "https://yt3.googleusercontent.com/TAXLCd3uFynuEQAcbyCZkBqzhDEqR1M0eHM0PTjMuJeUzKwUIhqlApDr6ZEe5Zk4yo1oXZZeFg=s176-c-k-c0x00ffffff-no-rj"
  }, {
    id: "lkjh7-asdfůflh75ksagHf",
    sentBy: "honzoraptor",
    timestamp: 1707206393972,
    text: "it is not a particularly stupid to get into the play-offs were a large number of people who could be considered to have been caught out by the scottish office and the scottish sports council's `scottish devolution, which had been in the first world war, when the brothers receive complementary functions of the catholic population week.",
    pfpUrl: "https://lh3.googleusercontent.com/ogw/ANLem4bi7UFPAOsFd_YAIfyUcTRGCWCw2h2qGS0X2u9R=s64-c-mo"
  }, {
    id: "asdfůklh7ZusaAhf-lkjh7",
    sentBy: "User",
    timestamp: 1707206422459,
    text: "he would be the last thing on his mind.",
    pfpUrl: "https://yt3.googleusercontent.com/TAXLCd3uFynuEQAcbyCZkBqzhDEqR1M0eHM0PTjMuJeUzKwUIhqlApDr6ZEe5Zk4yo1oXZZeFg=s176-c-k-c0x00ffffff-no-rj"
  }, {
    id: "XYZfUklh7Zusaahf-lkjh7",
    sentBy: "honzoraptor",
    timestamp: 1707206431797,
    text: "in the latter part of the nineteenth century, the most important medium for the contras behind this restriction is not to be confused with his head bowed in the volume of exports to the ec budget and made the most of the opportunities that are available to us as a race to remember that in the event of the borrower the hall effect it would have on the city.'",
    pfpUrl: "https://lh3.googleusercontent.com/ogw/ANLem4bi7UFPAOsFd_YAIfyUcTRGCWCw2h2qGS0X2u9R=s64-c-mo"
  }]

  function submit(msg) {
    console.log(`Message "${msg}" was sent.`)
  }

  function scrollToBottom() {
    const msgTimestamps = []
    for (let i = 0; i < messages.length; i++) {
      msgTimestamps.push(messages[i].timestamp)
    }
    document.getElementById(Math.max(...msgTimestamps)).scrollIntoView()
  }

  async function getData() {
    const { data, error } = await supabase
      .from('messages')
      .select()
    console.log(data)
    console.log(error)
  }

  useEffect(() => {
    scrollToBottom()
    getData()
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
            {messages.map(value => {
              return (
                <Message key={value.id} text={value.text} sentBy={value.sentBy} timestamp={value.timestamp} pfpUrl={value.pfpUrl} />
              )
            })}
          </div>
          <div className="chat-ctrls">
            <div className="input-wrp">
              <div className="input-pfp-btn">
                <img className="input-pfp-img" src="https://lh3.googleusercontent.com/ogw/ANLem4bi7UFPAOsFd_YAIfyUcTRGCWCw2h2qGS0X2u9R=s64-c-mo" />
              </div>
              <input id="message-input" placeholder={inputPlaceholders[Math.floor(Math.random() * inputPlaceholders.length)]} type="text" onChange={(e) => { setMessage(e.target.value) }} value={message} />
            </div>
            <button onClick={() => { submit(message) }}>Submit</button>
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