import { useEffect, useState } from "react"
import Chat from "./components/Chat"

function App() {
  const logged = false

  async function googleSignIn() {
    console.log("Sign in function")
  }

  return (
    <>
      {logged ? <Chat /> : (
        <>
          <p className="log-in-please">If you want to join the chat room, you have to be signed in.</p>
          <button onClick={googleSignIn} className="google-signin">
            <img src="./google-icon.svg" />
            <span>Sign in with google</span>
          </button>
        </>
      )}
    </>
  )
}

export default App