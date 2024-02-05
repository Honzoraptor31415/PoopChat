import Message from "./Message"

function App() {
  const messages = [{
    id: "lkjh7",
    sentBy: "User",
    timestamp: 1707133384022,
    text: "Da text of da fucking message bro. Problem??",
    pfpUrl: "https://lh3.googleusercontent.com/ogw/ANLem4bi7UFPAOsFd_YAIfyUcTRGCWCw2h2qGS0X2u9R=s64-c-mo"
  }, {
    id: "lkjh7-asdfůklh7bksaghf",
    sentBy: "User",
    timestamp: 1707133384022,
    text: "Da text of da fucking message bro. Problem??",
    pfpUrl: "https://lh3.googleusercontent.com/ogw/ANLem4bi7UFPAOsFd_YAIfyUcTRGCWCw2h2qGS0X2u9R=s64-c-mo"
  }, {
    id: "lkjh7-asdfůflh75ksagHf",
    sentBy: "User",
    timestamp: 1707133384022,
    text: "Da text of da fucking message bro. Problem??",
    pfpUrl: "https://lh3.googleusercontent.com/ogw/ANLem4bi7UFPAOsFd_YAIfyUcTRGCWCw2h2qGS0X2u9R=s64-c-mo"
  }, {
    id: "asdfůklh7ZusaAhf-lkjh7",
    sentBy: "User",
    timestamp: 1707133384022,
    text: "Da text of da fucking message bro. Problem??",
    pfpUrl: "https://lh3.googleusercontent.com/ogw/ANLem4bi7UFPAOsFd_YAIfyUcTRGCWCw2h2qGS0X2u9R=s64-c-mo"
  }, {
    id: "XYZfUklh7Zusaahf-lkjh7",
    sentBy: "User",
    timestamp: 1707133384022,
    text: "Da text of da fucking message bro. Problem??",
    pfpUrl: "https://lh3.googleusercontent.com/ogw/ANLem4bi7UFPAOsFd_YAIfyUcTRGCWCw2h2qGS0X2u9R=s64-c-mo"
  }]

  return (
    <>
      <div className="messages-wrp">
        {messages.map(value => {
          return (
            <Message key={value.id} text={value.text} sentBy={value.sentBy} timestamp={value.timestamp} pfpUrl={value.pfpUrl} />
          )
        })}
      </div>
    </>
  )
}

export default App