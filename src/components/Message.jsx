function Message({ sentBy, timestamp, text, pfpUrl }) {
  const username = "honzoraptor"
  return (
    <div className={`message message-${sentBy === username ? "me" : "someone"}`}>
      <div className="message-top">
        <img src={pfpUrl} />
        <p className="message-username">{sentBy}</p>
      </div>
      <p className="message-text">{text}</p>
    </div>
  )
}

export default Message