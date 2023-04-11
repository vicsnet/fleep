/** @format */

import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import Calendar from "react-calendar";
import { useState, useRef, useEffect } from "react";
import { CalenderUtil } from "../consts/calenderUtil";
import moment from "moment";
import formatDate from "../consts/helper";


const Calender = ({setDataD}) => {
  const [value, onChange] = useState(new Date());
  const [showCalender, setShowCalender] = useState(false);
  // const [dataD, setDataD] = useState(""); 

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
    setDataD(formatDate(e))
    console.log("eve",e);

  
  };

useEffect(()=>{
  const elementa = document.getElementById("conten");
elementa.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
if(value){

  // setDataD(formatDate(value));
}


},[value])

  return (
    <section>
      {/* <Calendar /> */}
      <div className="bg-[#19192E] max-w-[1230px] lgDesktop:w-[1000px] smDesktop:w-[735px] smDesk:w-[630px] tablet:hidden tabletAir:w-[200px] mx-auto mt-[32px] rounded-lg   " >
        <div className=" mx-auto w-[90%] relative smDesktop:w-[94%] justify-between">
          <div className="relative">
            {showCalender ? (
              <Calendar
                onChange={onDateSelect}
                value={value}
                className="absolute bg-white"
              />
            ) : (
              ""
            )}

            <h3
              className="text-[16px] leading-[19.2px] text-[#fff] font-[500px] pt-[26px] pb-[8px] cursor-pointer"
              onClick={() => setShowCalender(true)}
            >
              {moment(value, "M").format("MMMM")} {moment(value).year()}
            </h3>
          </div>

          <IoIosArrowDropleftCircle
            onClick={() => scroll(-600)}
            size={24}
            className=" text-[#FFFFFF] absolute top-[74px] cursor-pointer"
          />

          <div
            ref={ref}
            className="flex pb-[33px] overflow-x-scroll scrollbar-hide scroll-smooth w-[94%] mx-auto"
          >
            {dateArr.map((date, i) => {
              return (
                <div
                
                  key={i}
                  className="border-r-[1px] border-[#6A6A6A] pr-[10px] smDesktop:pr-[4px] pl-[74px] smDesktop:pl-[59px] cursor-pointer"
                >
                  <h4
                  onClick={()=>{
                    setDataD(formatDate(
                      new Date(date.year, date.month, date.num))
                    );

                    onChange(new Date(date.year, date.month, date.num))
                  }}
                  id={date.num === value.getDate() &&"conten" }
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
            className=" text-[#FFFFFF] absolute bottom-[50px] right-[0px] lgDesktop:right-[0px] smDesktop:right-[0px] cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
};

export default Calender;
