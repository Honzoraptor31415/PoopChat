function Message({ sentBy, timestamp, text, pfpUrl }) {
  return (
    <div className="message">
      <div className="message-top">
        <img src={pfpUrl} />
        <p className="message-username">{sentBy}</p>
      </div>
      <p className="message-text">{text}</p>
    </div>
  )
}

export default Message