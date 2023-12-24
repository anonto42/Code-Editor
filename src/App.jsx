import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import LoginSineUp from "./pages/LoginSineUp"
import Output from "./pages/Output"
import Error from "./pages/Error"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/loginsignup" element={<LoginSineUp/>}/>
        <Route path="/output" element={<Output/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
