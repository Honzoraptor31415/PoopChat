import { Routes, Route, BrowserRouter } from "react-router-dom"
import Home from "./components/pages/Home"
import About from "./components/pages/About"
import Error from "./components/pages/Error"
import Nav from "./components/Nav"

function App() {
  return (
    <>
      <Nav />
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