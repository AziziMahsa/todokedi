"use client";
import Modal from "./modal";
import { useState } from "react";
function Header() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className=" bg-blue-500 h-fit  py-8  ">
        <div className="container mx-auto px-10 flex flex-row">
          <div className="flex   text-gray-100   justify-center flex-row w-1/2 ">
            <div className="text-center flex items-center px-5 border-r  border-r-blue-400 h-fit  ">
              TODOKEDI
            </div>
            <div className="text-center flex items-center px-5 border-r border-r-blue-400 h-fit   ">
              Features
            </div>
            <div className="text-center flex items-center px-5 border-r border-r-blue-400  h-fit ">
              How It Works
            </div>
            <div className="text-center flex items-center px-5 h-fit   ">
              Contact Us
            </div>
          </div>
          <div className=" w-1/2 flex  justify-end ">
            <button
              onClick={() => {
                setShowModal(true);
              }}
              className=" h-8 rounded-3xl text-sm px-4 border border-blue-100  text-gray-100 "
            >
              Login/Register
            </button>
            {showModal ? <Modal onClose={() => setShowModal(false)} /> : null}
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
