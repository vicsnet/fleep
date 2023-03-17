/** @format */

import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import Calendar from "react-calendar";
import { useState, useRef } from "react";
import { CalenderUtil } from "../consts/calenderUtil";
import moment from "moment";

const Calender = () => {
  const [value, onChange] = useState(new Date());
  const [showCalender, setShowCalender] = useState(false);
  const [dateArr, setDateArr] = useState(
    CalenderUtil.updateIncomingDate(value)
  );
  const ref = useRef(null);

  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };
  const onDateSelect = (e) => {
    onChange(e);
    setDateArr(CalenderUtil.updateIncomingDate(e));
    setShowCalender(false);
  };

  return (
    <section>
      {/* <Calendar /> */}
      <div className="bg-[#19192E] w-[93%] mx-auto mt-[32px] rounded-lg tabletAir:hidden">
        <div className="w-[1010px] mx-auto relative smDesktop:w-[94%]">
          <div className="relative">
            {showCalender ? (
              <Calendar
                onChange={onDateSelect}
                value={value}
                className="absolute"
              />
            ) : (
              ""
            )}

            <h3
              className="text-[16px] leading-[19.2px] text-[#fff] font-[500px] pt-[26px] pb-[8px] cursor-pointer"
              onClick={() => setShowCalender(true)}
            >
              {moment(value, "M").format("MMMM")} 
              {/* {moment(value).year()} */}
            </h3>
          </div>

          <IoIosArrowDropleftCircle
            onClick={() => scroll(-600)}
            size={24}
            className=" text-[#FFFFFF] absolute top-[74px]"
          />

          <div
            ref={ref}
            className="flex pb-[33px] overflow-x-scroll scrollbar-hide scroll-smooth"
          >
            {dateArr.map((date, i) => {
              return (
                <div
                  key={i}
                  className="border-r-[1px] border-[#6A6A6A] pr-[10px] smDesktop:pr-[4px] pl-[74px] smDesktop:pl-[59px]"
                >
                  <h4
                    className={`text-[30px] ${
                      date.num === value.getDate()
                        ? "text-[#fff]"
                        : "text-[#c6c6c6a1]"
                    }  font-light leading-9 `}
                  >
                    {date.num}
                  </h4>
                  <p
                    className={`text-[14px] font-light ${
                      date.num === value.getDate()
                        ? "text-[#fff]"
                        : "text-[#c6c6c6a1]"
                    }`}
                  >
                    {date.day}
                  </p>
                </div>
              );
            })}
          </div>

          <IoIosArrowDroprightCircle
            onClick={() => scroll(600)}
            size={24}
            className=" text-[#FFFFFF] absolute bottom-[50px] right-[63px] lgDesktop:right-[0px] smDesktop:right-[0px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Calender;
