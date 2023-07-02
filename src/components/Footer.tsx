import React from "react";
import {AiFillLock} from 'react-icons/ai'

function Footer() {
  return (
    <div className="navbar flex flex-col justify-center align-center h-18 mt-6">
      <div className="flex align-center justify-center pt-2"><AiFillLock/> Secure Area</div>
      <div className="flex justify-around align-center underline">
        <a href="#">Privacy</a>
        <a href="#">Security</a>
        <a href="#">Advertising Practices</a>
        <a href="#">Legal Info & Disclosures</a>
        <a href="#">Equal Housing Lenders</a>
      </div>
      <div className="flex align-center justify-center pt-2"> PayCircle,N.A.Member FDIC</div>
      <div className="flex align-center justify-center">@ 2023 PayCircle Corporation</div>
    </div>
  );
}

export default Footer;
