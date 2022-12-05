import { useState, useEffect, useRef } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import user from "../assets/Rectangle 24.png";
import { BsStarFill } from "react-icons/bs";
import { BsDash } from "react-icons/bs";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.min.css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";

const url = "https://jsonplaceholder.typicode.com/users";

const Testimonial = () => {

   const navigationPrevRef = useRef(null);
   const navigationNextRef = useRef(null);

  const [datas, setDatas] = useState([]);

  const getData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setDatas(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <section>
      <main className="w-[90%] mx-auto ">
        <div className="flex justify-between items-end mt-[90px]">
          <h2 className="text-[42px] leading-[52px] font-black text-[#1A1941] w-[40%]  smDesktop:w-[50%] tabletAir:w-[60%]">
            What our loving users are saying about us
          </h2>
          <div className="flex gap-[24px]">
            <span
              ref={navigationPrevRef}
              className={
                " next w-[44px] h-[44px] rounded-[4px] bg-[#1A1941] border-[1px] border-[#EAEAEA] flex items-center justify-center text-[#FFFFFF] cursor-pointer"
              }
            >
              <IoIosArrowBack size={24} />
            </span>

            <span
              ref={navigationNextRef}
              className={
                 navigationNextRef.loop = true
                  ? "w-[44px] h-[44px] rounded-[4px] bg-[#1A1941] border-[1px] border-[#EAEAEA] flex items-center justify-center text-[#FFFFFF] cursor-pointer"
                  :
                  "w-[44px] h-[44px] rounded-[4px] bg-[green] border-[1px] border-[#EAEAEA] flex items-center justify-center text-[#FFFFFF] "
              }
            >
              <IoIosArrowForward size={24} className="" />
            </span>
          </div>
        </div>

        {/*  */}

        <div
          id="slider"
          // overflow-x-scroll scroll-smooth scrollbar-hide
          className="mt-[70px]"
        >
          <Swiper
            slidesPerView={2}
            spaceBetween={30}
            loop={false}
            slidesPerGroup={2}
            loopFillGroupWithBlank={false}
            pagination={{
              clickable: true,
            }}
            // navigation={true}

            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            {datas.map((data) => (
              <SwiperSlide
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
                  think this is a great approach and I really love the
                  innovation”
                </p>
                <span className="flex gap-2 mt-[48px]">
                  <BsStarFill className="text-[#FFD231]" />
                  <BsStarFill className="text-[#FFD231]" />
                  <BsStarFill className="text-[#FFD231]" />
                  <BsStarFill className="text-[#FFD231]" />
                  <BsStarFill className="text-[#FFD231]" />
                </span>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </main>
    </section>
  );
};

export default Testimonial;
