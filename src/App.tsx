import { useState } from "react";

import "./App.css";
import RegisterPage from "./pages/RegisterPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage.comp";

function App() {
  //const [count, setCount] = useState(0);

  return (
    <>
      <RegisterPage/>
      <Navbar/> 
      <div></div>
      <Footer/>
    </>
  );
}

export default App;
