import { useState } from "react";

import "./App.css";
import RegisterPage from "./pages/RegisterPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <RegisterPage/>
    </>
  );
}

export default App;
