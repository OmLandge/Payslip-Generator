import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { Login } from "./pages/Login"
import { Payslip } from "./pages/Payslip"
import { Contact } from "./pages/Contact"


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/payslip" element={<Payslip />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
