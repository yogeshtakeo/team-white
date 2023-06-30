import { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import "./App.css";
import LoginPage from "./pages/LoginPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <RegisterPage /> */}
      {/* <HomePage /> */}
      <LoginPage />
      {/* <Navbar /> */}
      {/* <Footer /> */}
    </>
  );
}

export default App;
