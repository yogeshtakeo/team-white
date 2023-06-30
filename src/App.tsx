import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage.comp";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar/> 
      <div></div>
      <Footer/>
    </>
  );
}

export default App;
