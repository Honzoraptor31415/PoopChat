function Error() {
  return (
    <div className="error-wrp">
      <div className="ets-wrp">
        <p className="ep-text">Error 404</p>
        <p className="epd-text">Page not found</p>
        <a href="/" className="back-to-home-yeeeet"><span style={{ fontSize: "1.4rem" }}>←</span> Back to homepage</a>
      </div>
    </div>
  )
}

export default Error