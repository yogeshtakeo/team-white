import { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage.comp";
import RegisterPage from "./pages/RegisterPage";
import "./App.css";
import Homepage from "./components/Homepage.comp";
import LoginPage from "./pages/LoginPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <RegisterPage />
      <h1> Welcome </h1>
      <Homepage />
      <LoginPage />
      <Navbar />
      <div></div>
      <Footer />
      <RegisterPage />
    </>
  );
}

export default App;
