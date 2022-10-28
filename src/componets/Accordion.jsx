import {useState} from "react";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { CiCircleMinus } from "react-icons/ci";

const Accordion = ({ title, details, id }) => {
     const [active, setActive] = useState(false);
  return (
    <div>
      <div
        className="mt-[57px] border-b-[1px] border-[#C6C6C6] mb-[33px]"
        key={id}
      >
        <span
          className={
            !active ? "flex justify-between mb-[24px] " : "flex justify-between"
          }
        >
          <h4 className="text-[22px] font-normal leading-[24px] text-[#333333]">
            {title}
          </h4>
          <div onClick={() => setActive(!active)}>
            {!active ? (
              <CiCircleMinus size={22} className="cursor-pointer"/>
            ) : (
              <BsFillPlusCircleFill size={22} className="cursor-pointer"/>
            )}
          </div>
        </span>
        <p
          className={
            !active
              ? "hidden "
              : "text-[17px] leading-[26px] text-[#8A8A8A] font-normal mt-[16px] mb-[20px]"
          }
        >
          {details}
        </p>
      </div>
    </div>
  );
};

export default Accordion;
