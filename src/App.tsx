import "./App.css";
//import Navbar from "./components/Navbar";
//import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import Search from './pages/Search'
import {Routes, Route} from "react-router-dom"
import RoutingNumber from "./pages/RoutingNumber";
import CreditCard from "./pages/CreditCard";
import CustomerService from "./pages/CustomerService";

function App() {
 

  return (
    <>
    <Routes>
      <Route path="/" element={<RegisterPage/>}></Route>
      <Route path="LoginPage" element={<LoginPage/>}></Route>
      <Route path="HomePage" element={<HomePage/>}></Route>
      <Route path="Search" element={<Search/>}></Route>
      <Route path="routing" element={<RoutingNumber/>}></Route>
      <Route path="credit" element={<CreditCard/>}></Route>
      <Route path="customers" element={<CustomerService/>}></Route>
     
      </Routes>

   
   </>
  )
}

export default App
