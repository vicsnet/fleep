import React, { useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { FiCopy } from "react-icons/fi";

import copy from "copy-to-clipboard";
import QR from "../../../assets/Vector (17).png";
const EventQR = () => {
  const [copyText, setCopyText] = useState("");
  const text = "123456GT";

  const handleCopyText = (e) => {
    setCopyText(e.target.value);
  };

  const copyToClipboard = () => {
    copy(copyText);
    copy(text);
    alert(`You have copied "${text}"`);
    alert(`You have copied "${copyText}"`);
  };

  return (
    <section
      className="w-[100%] h-screen max-h-screen fixed top-0 overflow-y-scroll scrollbar-thin scrollbar-thumb-[#19192E] scrollbar-track-gray-100 scrollbar-thumb-rounded-full scrollbar-track-rounded-full "
      style={{ background: "rgba(20, 24, 31, 0.25)" }}
    >
      <div
        className="w-[70%]  rounded-lg mt-[196px] ml-[10%] pb-[73px]"
        style={{ background: "rgba(255, 255, 255, 1)" }}
      >
        <div className="w-[90%] mx-auto">
          <div className="pt-[54px] flex items-center justify-end gap-60 ">
            <h2 className="text-[28px] leading-8 font-bold text-[#1A1941]">
              Event Created Successfully
            </h2>
            <IoIosCloseCircleOutline size={20} className="text-[#7C7B7B]" />
          </div>
          <img
            src={QR}
            alt=""
            className="mt-[57.5px] w-[225px] h-[225px] mx-auto"
          />
          <div className="mt-[70px] flex items-center justify-center">
            <h2 className="text-[16px] font-bold leading-5 text-[#8B8B8B]">
              Event Code:
            </h2>
            <p className="text-[16px] leading-5 font-normal text-[#19192E] ml-[8px] ">
              {text}
            </p>

            <FiCopy
              size={16}
              className="text-[#EE2339] ml-3"
              onClick={copyToClipboard}
            />
          </div>
          <div className="w-[100%] flex justify-center">
            <button className="text-[16px] font-bold leading-5 bg-[#1A1941] text-white h-12 px-12 rounded-lg mx-auto mt-12">
              Close
            </button>
          </div>
          {/* <input type="text" value={copyText} onChange={handleCopyText} />

          <button onClick={copyToClipboard}>Copy to Clipboard</button> */}
        </div>
      </div>
    </section>
  );
};

export default EventQR;
