import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";

const Calender = () => {
  return (
    <section>
      <div className="bg-[#19192E] w-[93%] mx-auto mt-[32px] rounded-lg tabletAir:hidden">
        <div className="w-[90%] mx-auto relative smDesktop:w-[94%]">
          <h3 className="text-[16px] leading-[19.2px] text-[#C6C6C6] font-[500px] pt-[26px] pb-[8px]">
            September
          </h3>

          <IoIosArrowDropleftCircle
            size={24}
            className=" text-[#FFFFFF] absolute top-[74px]"
          />
          <div className="flex pb-[33px] overflow-x-scroll scrollbar-hide">
            <div className="border-r-[1px] border-[#6A6A6A] pr-[10px] smDesktop:pr-[4px] pl-[74px] smDesktop:pl-[59px]">
              <h4 className="text-[30px] text-[#C6C6C6] font-light leading-9 ">
                20
              </h4>
              <p className="text-[14px] font-light text-[#C6C6C6] ">Thursday</p>
            </div>
            <div className="border-r-[1px] border-[#6A6A6A] pr-[10px] smDesktop:pr-[4px] pl-[74px] smDesktop:pl-[59px]">
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
            </div>
          </div>
          <IoIosArrowDroprightCircle
            size={24}
            className=" text-[#FFFFFF] absolute bottom-[50px] right-[63px] lgDesktop:right-[0px] smDesktop:right-[0px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Calender;
