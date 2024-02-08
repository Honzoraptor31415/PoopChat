import { Routes, Route, BrowserRouter } from "react-router-dom"
import Home from "./components/pages/Home"
import Error from "./components/pages/Error"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App