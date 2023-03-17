/** @format */

import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import Calendar from "react-calendar";
import { Eventcalendar } from "@mobiscroll/react-lite";
import { useEffect, useState } from "react";
import {
  getNumberOfDaysInMonth,
  getSortedDays,
  monthNames,
  range,
} from "../consts";
// import 'react-calendar/dist/Calendar.css'

const Calender = () => {
  const [date, setDate] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());

  const [currentyYear, setCurrentYear] = useState(new Date().getFullYear());
  const [currentDay, setCurrentDay] = useState(new Date().getDay());

  const [selectDate, setSelectDate] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  console.log(date[3]);

  console.log(getSortedDays()[new Date().getDay()]);

  const nextMonth = () => {
    if (currentMonth < 11) {
      setCurrentMonth((prev) => prev + 1);
    } else {
      setCurrentMonth(0);
      setCurrentYear((prev) => prev + 1);
    }
  };
  const prevMonth = () => {
    if (currentMonth > 0) {
      setCurrentMonth((prev) => prev - 1);
    } else {
      setCurrentMonth(11);
      setCurrentYear((prev) => prev - 1);
    }
  };

  // handling dateSelection
  const handleDateSelection = (e) => {
    if (e.target.id === "day") {
      setSelectDate(
        new Date(currentyYear, currentMonth, e.target.getAttribute("data-day"))
      );
    }
  };

  useEffect(() => {
    //  setCurrentDay('March 19, 1975')
  }, []);

  // console.log(selectDate);
  return (
    <section>
      {/* <Calendar /> */}
      <div className="bg-[#19192E] w-[93%] mx-auto mt-[32px] rounded-lg tabletAir:hidden text-white">
        <div className="w-[1010px] mx-auto relative smDesktop:w-[94%]">
          <h3 className="text-[16px] leading-[19.2px] text-[#C6C6C6] font-[500px] pt-[26px] pb-[8px]">
            {monthNames[currentMonth]} {currentyYear}
          </h3>

          <IoIosArrowDropleftCircle
            // onClick={goToPrevious}
            onClick={prevMonth}
            size={24}
            className=" text-[#FFFFFF] absolute top-[74px]"
          />

          <div className="flex pb-[33px] overflow-x-scroll scrollbar-hide">
            {range(
              1,
              getNumberOfDaysInMonth(currentyYear, currentMonth) + 1
            ).map((day, i) => (
              <div className="border-r-[1px] border-[#6A6A6A] pr-[10px] smDesktop:pr-[4px] pl-[74px] smDesktop:pl-[59px]">
                <h4
                  onClick={handleDateSelection}
                  className="text-[30px] text-[#C6C6C6] font-light leading-9 "
                >
                  <p id="day" data-day={day}>
                    {day + 1}
                    {/* {day[currentDay]} */}
                    {/* {getSortedDays().map((day) => ( */}
                    <p className=" font-light text-[#C6C6C6] text-[14px]">
                      {getSortedDays()[new Date([day]).getDay()]}
                    </p>
                    {/* ))} */}
                  </p>
                </h4>
              </div>
            ))}
          </div>

          {/* <div className="flex text-[14px] text-[#C6C6C6] font-light  ">
              {getSortedDays().map((day) => (
                <p className=" font-light text-[#C6C6C6] pr-[10px] smDesktop:pr-[4px] pl-[74px] smDesktop:pl-[59px] ">{day}</p>
              ))}
            </div> */}

          {/* <div className="border-r-[1px] border-[#6A6A6A] pr-[10px] smDesktop:pr-[4px] pl-[74px] smDesktop:pl-[59px]">
              <h4 className="text-[30px] text-[#C6C6C6] font-light leading-9 ">
                21
              </h4>
              <p className="text-[14px] font-light text-[#C6C6C6] ">Friday</p>
            </div>
            <div className="border-r-[1px] border-[#6A6A6A] pr-[10px] smDesktop:pr-[4px] pl-[74px] smDesktop:pl-[59px]">
              <h4 className="text-[30px] text-[#FFFFFF] font-light leading-9 ">
                22
              </h4>
              <p className="text-[14px] font-light text-[#FFFFFF] ">Saturday</p>
            </div>
            <div className="border-r-[1px] border-[#6A6A6A] pr-[10px] smDesktop:pr-[4px] pl-[74px] smDesktop:pl-[59px]">
              <h4 className="text-[30px] text-[#C6C6C6] font-light leading-9">
                23
              </h4>
              <p className="text-[14px] font-light text-[#C6C6C6] ">Sunday</p>
            </div>
            <div className="border-r-[1px] border-[#6A6A6A] pr-[10px] smDesktop:pr-[4px] pl-[74px] smDesktop:pl-[59px]">
              <h4 className="text-[30px] text-[#C6C6C6] font-light leading-9 ">
                24
              </h4>
              <p className="text-[14px] font-light text-[#C6C6C6] ">Monday</p>
            </div>
            <div className="border-r-[1px] border-[#6A6A6A] pr-[10px] smDesktop:pr-[4px] pl-[74px] smDesktop:pl-[59px]">
              <h4 className="text-[30px] text-[#C6C6C6] font-light leading-9 ">
                25
              </h4>
              <p className="text-[14px] font-light text-[#C6C6C6]">Tuesday</p>
            </div> */}

          <IoIosArrowDroprightCircle
            onClick={nextMonth}
            // onClick={goToNext}
            size={24}
            className=" text-[#FFFFFF] absolute bottom-[50px] right-[63px] lgDesktop:right-[0px] smDesktop:right-[0px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Calender;
