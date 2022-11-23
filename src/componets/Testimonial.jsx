import { useState, useEffect } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import user from "../assets/Rectangle 24.png";
import { BsStarFill } from "react-icons/bs";
import { BsDash } from "react-icons/bs";

const url = "https://jsonplaceholder.typicode.com/users";

const Testimonial = () => {
  const [datas, setDatas] = useState([]);

  const getData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setDatas(data);
  };

  useEffect(() => {
    getData();
  }, []);

  // const [currentIndex, setCurrentIndex] = useState(0)

  const goToNextSlide = () => {
    let slider = document.querySelector(".slider");
    slider.scrollBy(560, 0);
  };
  const goToPreviousSlide = () => {
    let slider = document.querySelector(".slider");
    slider.scrollBy(-560, 0);
  };

  return (
    <section>
      <main className="w-[90%] mx-auto">
        <div className="flex justify-between items-end mt-[90px]">
          <h2 className="text-[42px] leading-[52px] font-extrabold text-[#1A1941] w-[40%]  smDesktop:w-[50%] tabletAir:w-[60%]">
            What our loving users are saying about us
          </h2>
          <div className="flex gap-[24px]">
            <span
              onClick={goToNextSlide}
              className={"w-[44px] h-[44px] rounded-[4px] bg-[#1A1941] border-[1px] border-[#EAEAEA] flex items-center justify-center text-[#FFFFFF] cursor-pointer" }
            >
              <IoIosArrowBack size={24} />
            </span>

            <span
              onClick={goToPreviousSlide}
              className="w-[44px] h-[44px] rounded-[4px] bg-[#1A1941] border-[1px] border-[#EAEAEA] flex items-center justify-center text-[#FFFFFF] cursor-pointer"
            >
              <IoIosArrowForward size={24} className="" />
            </span>
          </div>
        </div>

        {/*  */}
        <div
          id="slider"
          className="slider flex flex-row-2 gap-[31px] mt-[70px] overflow-x-scroll scroll-smooth scrollbar-hide"
        >
          {datas.map((data) => (
            <div
              key={data.id}
              className="rounded-[8px] px-[48px] pt-[48px] pb-[38px]"
              style={{ boxShadow: "0px 10px 30px 0px rgba(0, 0, 0, 0.06)" }}
            >
              <div className="flex gap-[22px] items-end">
                <img
                  src={user}
                  alt=""
                  className="w-[76px] h-[76px] object-cover rounded-[8px]"
                />
                <span>
                  <h3 className="text-[22px] leading-[32px] font-semibold text-[#333333] ">
                    Debbie Imedi
                  </h3>
                  <p className=" text-[#A6A9B8] text-[14px] leading-[24px] font- ">
                    User
                  </p>
                </span>
              </div>
              <p className="text-[16px] leading-[30px] tracking-[-1%] text-[#333333] font-normal mt-[28px] w-[474px]  ">
                “I have always wondered what happens to the pictures I do not
                collect or I never got to see in weddings I have attended, I
                think this is a great approach and I really love the innovation”
              </p>
              <span className="flex gap-2 mt-[48px]">
                <BsStarFill className="text-[#FFD231]" />
                <BsStarFill className="text-[#FFD231]" />
                <BsStarFill className="text-[#FFD231]" />
                <BsStarFill className="text-[#FFD231]" />
                <BsStarFill className="text-[#FFD231]" />
              </span>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-[55px]">
          {datas.map(({ slide, slideIndex }) => (
            <div
              key={slideIndex}
              // onClick={() => goToSlide(slideIndex)}
            >
              <BsDash size={30} className={"text-[#D9D9D9]"} />
            </div>
          ))}
        </div>
      </main>
    </section>
  );
};

export default Testimonial;
