import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import {Routes, Route} from "react-router-dom"

function App() {
 

  return (
    <>
    <Routes>
      <Route path="/" element={<RegisterPage/>}></Route>
      <Route path="login" element={<LoginPage/>}></Route>
      <Route path="home" element={<HomePage/>}></Route>
      </Routes>

   
   </>
  )
}

export default App
