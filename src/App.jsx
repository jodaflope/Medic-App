import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./Pages/HomePage"
import AboutPage from "./Pages/AboutPage"
import PatientsPage from "./Pages/PatientsPage"
import AppointmentPage from "./Pages/AppointmentPage"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}></Route>
          <Route path="/about" element={<AboutPage/>}></Route>
          <Route path="/patients" element={<PatientsPage/>}></Route>
          <Route path="/Appointments" element={<AppointmentPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
