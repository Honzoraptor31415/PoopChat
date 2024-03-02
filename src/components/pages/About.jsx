import { useEffect } from 'react'

function About() {
  useEffect(() => {
    if (location.hash != "") {
      document.getElementById(location.hash.slice(1)).scrollIntoView()
    }
  }, [])

  return (
    <div className="about-section">
      <h2>About PoopChat</h2>
      <p className="about-text">PoopChat is a chat app made by <a href="https://github.com/Honzoraptor31415">Honzoraptor</a> in about three days (the first version) when he (me xD) was border. So far it's just the basic chat app, but in the future, there will be a pooping functionality, which a user can use to make someone unable to send messages for a specific time period, or maybe take controll over the specific user. </p>
      <h2 id='about-pooping'>About the poop functionality</h2>
      <p className="about-text">You can use the <button className="poop-btn">Poop button</button> to poop someone - make them unable to send messages or view the chat for <b>2 hours!</b> However be careful, because the moment you send a message, anyone who's looking at the chat can poop you immediately.</p>
    </div>
  )
}

export default About