import "./App.css";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import Search from "./pages/Search";
import { Routes, Route } from "react-router-dom";
import CreditCards from "./pages/CreditCards";
import CustomerService from "./pages/CustomerService";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RegisterPage />}></Route>
        <Route path="LoginPage" element={<LoginPage />}></Route>
        <Route path="HomePage" element={<HomePage />}></Route>
        <Route path="Search" element={<Search />}></Route>
        <Route path="CreditCards" element={<CreditCards />}></Route>
        <Route path="CustomerService" element={<CustomerService />}></Route>
      </Routes>
    </>
  );
}

export default App;
