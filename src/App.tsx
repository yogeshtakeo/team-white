import { useState } from "react";
import "./App.css";
import Homepage from "./components/Homepage.comp";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1> Welcome </h1>
      <Homepage />
    </>
  );
}

export default App;
