import { useEffect } from "react"
import Message from "./components/Message"
import { useState, useRef } from "react"

function App() {
  const inputPlaceholders = ["Feel free to start typing", "You can type here", "Write your message", "Your message goes here!", "May you pls start typing?", "Write something", "Bing chilling", "Start typing..."]
  const [message, setMessage] = useState("")

  const messages = [{
    id: "lkjh7",
    sentBy: "User",
    timestamp: 1707133384022,
    text: "that's it.",
    pfpUrl: "https://lh3.googleusercontent.com/ogw/ANLem4bi7UFPAOsFd_YAIfyUcTRGCWCw2h2qGS0X2u9R=s64-c-mo"
  }, {
    id: "lkjh7-asdfůklh7bksaghf",
    sentBy: "User",
    timestamp: 1707133384022,
    text: "the village has a considerable influence on the design of the course is the same as any other party.",
    pfpUrl: "https://lh3.googleusercontent.com/ogw/ANLem4bi7UFPAOsFd_YAIfyUcTRGCWCw2h2qGS0X2u9R=s64-c-mo"
  }, {
    id: "lkjh7-asdfůflh75ksagHf",
    sentBy: "honzoraptor",
    timestamp: 1707133384022,
    text: "it is not a particularly stupid to get into the play-offs were a large number of people who could be considered to have been caught out by the scottish office and the scottish sports council's `scottish devolution, which had been in the first world war, when the brothers receive complementary functions of the catholic population week.",
    pfpUrl: "https://lh3.googleusercontent.com/ogw/ANLem4bi7UFPAOsFd_YAIfyUcTRGCWCw2h2qGS0X2u9R=s64-c-mo"
  }, {
    id: "asdfůklh7ZusaAhf-lkjh7",
    sentBy: "User",
    timestamp: 1707133384022,
    text: "he would be the last thing on his mind.",
    pfpUrl: "https://lh3.googleusercontent.com/ogw/ANLem4bi7UFPAOsFd_YAIfyUcTRGCWCw2h2qGS0X2u9R=s64-c-mo"
  }, {
    id: "XYZfUklh7Zusaahf-lkjh7",
    sentBy: "honzoraptor",
    timestamp: 1707133384022,
    text: "in the latter part of the nineteenth century, the most important medium for the contras behind this restriction is not to be confused with his head bowed in the volume of exports to the ec budget and made the most of the opportunities that are available to us as a race to remember that in the event of the borrower the hall effect it would have on the city.'",
    pfpUrl: "https://lh3.googleusercontent.com/ogw/ANLem4bi7UFPAOsFd_YAIfyUcTRGCWCw2h2qGS0X2u9R=s64-c-mo"
  }]

  function submit() {
    console.log("Message sent. mmmhmmmhmm")
  }

  useEffect(() => {
    onload = () => {
      document.getElementById("chat").scrollTop = document.getElementById("chat").scrollHeight
    }
  }, [])

  return (
    <>
      <div id="chat" className="chat">
        <div className="messages-wrp">
          {messages.map(value => {
            return (
              <Message key={value.id} text={value.text} sentBy={value.sentBy} timestamp={value.timestamp} pfpUrl={value.pfpUrl} />
            )
          })}
        </div>
        <div className="chat-ctrls">
          <input placeholder={inputPlaceholders[Math.floor(Math.random() * inputPlaceholders.length - 1)]} type="text" />
          <button onClick={submit}>Submit</button>
        </div>
      </div>
    </>
  )
}

export default App