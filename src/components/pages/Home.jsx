import { useEffect, useState } from "react"
import { supabase } from "../../supabaseClient"
import Chat from "../../components/Chat"

function Home() {
  const [user, setUser] = useState()

  async function getUser() {
    const { data: { user } } = await supabase.auth.getUser()
    user ? setUser(user) : setUser(null)
  }

  async function googleSignIn() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google'
    })
  }

  useEffect(() => {
    getUser()
  }, [])

  return (
    <>
      {user ? <Chat /> : (
        <>
          {user === null && (
            <>
              <p className="log-in-please">If you want to join the chat room, you have to be signed in.</p>
              <button onClick={googleSignIn} className="google-signin">
                <img src="./google-icon.svg" />
                <span>Sign in with google</span>
              </button>
            </>
          )}
        </>
      )}
    </>
  )
}

export default Home