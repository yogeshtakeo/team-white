import React from "react";
import {AiFillLock} from 'react-icons/ai'

function Footer() {
  return (
    <div className="  flex flex-col justify-center align-center h-18 mt-12 bg-transparent  text-sm  w-full">
      <div className="flex items-center justify-center mb-2 z-0 border-t-2 w-full pt-2"><AiFillLock size={20}/> Secure Area</div>
      <div className="flex justify-around  items-center underline z-0 w-full">
        <a href="#">Privacy</a>
        <a href="#">Security</a>
        <a href="#">Advertising Practices</a>
        <a href="#">Legal Info & Disclosures</a>
        <a href="#">Equal Housing Lenders</a>
      </div>
      <div className="flex align-center justify-center pt-2 mb-2 z-0 mt-4"> PayCircle,N.A.Member FDIC</div>
      <div className="flex align-center justify-center z-0 mb-2">@ 2023 PayCircle Corporation</div>
    </div>
  );
}

export default Footer;
