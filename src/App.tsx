import "./App.css";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import { Routes, Route } from "react-router-dom";
import CreditCards from "./pages/CreditCards";
import CustomerService from "./pages/CustomerService";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RegisterPage />}></Route>
        <Route path="login" element={<LoginPage />}></Route>
        <Route path="home" element={<HomePage />}></Route>
        <Route path="CreditCards" element={<CreditCards />}></Route>
        <Route path="CustomerService" element={<CustomerService />}></Route>
      </Routes>

      {/* <RegisterPage /> */}
      {/* <HomePage /> */}
      {/* <LoginPage /> */}
      {/* <Navbar /> */}
    </>
  );
}

export default App;
