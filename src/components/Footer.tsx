import React from "react";
import {AiFillLock} from 'react-icons/ai'

function Footer() {
  return (
    <div className="  flex flex-col justify-center align-center h-18 mt-12 bg-transparent  text-sm p-2 w-[50%] mx-auto">
      <div className="flex items-center justify-center mb-2"><AiFillLock size={20}/> Secure Area</div>
      <div className="flex justify-between items-center underline">
        <a href="#">Privacy</a>
        <a href="#">Security</a>
        <a href="#">Advertising Practices</a>
        <a href="#">Legal Info & Disclosures</a>
        <a href="#">Equal Housing Lenders</a>
      </div>
      <div className="flex align-center justify-center pt-2 mb-2 "> PayCircle,N.A.Member FDIC</div>
      <div className="flex align-center justify-center">@ 2023 PayCircle Corporation</div>
    </div>
  );
}

export default Footer;
