import { useEffect, useState } from "react"
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Home from "./components/pages/Home"
import About from "./components/pages/About"
import Error from "./components/pages/Error"
import Nav from "./components/Nav"
import { supabase } from "./supabaseClient"

function App() {
  const [user, setUser] = useState()

  async function getUser() {
    const { data: { user } } = await supabase.auth.getUser()
    setUser(user)
  }
  useEffect(() => {
    getUser()
  }, [])

  return (
    <>
      {user ? <Nav /> : ""}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App