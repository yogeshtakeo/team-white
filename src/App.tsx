import { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage.comp";
import RegisterPage from "./pages/RegisterPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar/> 
      <div></div>
      <Footer/>
      <RegisterPage/>
    </>
  );
}

export default App;
