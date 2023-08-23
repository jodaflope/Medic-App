import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./Pages/HomePage"
import AboutPage from "./Pages/AboutPage"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}></Route>
          <Route path="/about" element={<AboutPage/>}></Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
