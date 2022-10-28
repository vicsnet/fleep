import React from "react";
import birthday from "../assets/Rectangle 349.png";
import birthdaymemories from "../assets/Rectangle 295.png";
import birthdaymemories2 from "../assets/Rectangle 347.png";
import wedding from "../assets/Rectangle 368.png";
import weddingParty from "../assets/Rectangle 242 (1).png";
import weddingCake from "../assets/Rectangle 367.png";
import seminars from "../assets/Frame 4565.png";
import seminarsPresent from "../assets/Frame 4566.png";
import Club from "../assets/Rectangle 370.png";
import BurnFire from "../assets/Rectangle 371.png";
import Party from "../assets/Rectangle 23.png";

const Creative = () => {
  return (
    <main>
      <h2 className="text-[80px] font-extrabold leading-[100px] text-center tracking-[-1%] w-[50%] mx-auto mt-[129px] text-[#19192E] smDesktop:w-[60%] smDesk:text-[70px] tabletAir:text-[60px]">
        Where creative process happens
      </h2>
      {/*  */}
      <section className="mt-[100px] flex gap-[61px] w-[90%]">
        <div className="w-[65%] flex gap-[10px] smDesktop:w-[68%] smDesk:w-[80%]">
          <img
            src={birthday}
            alt=""
            className="h-[580px] smDesktop:h-[480px] smDesktop:w-[64%] object-fill tabletAir:h-[450px]"
          />
          <div className="flex flex-col gap-[10px]">
            <img
              src={birthdaymemories}
              alt=""
              className="h-[285px] w-[285px] object-fill rounded-[20px] smDesktop:h-[234.3px] tabletAir:h-[218px]"
            />
            <img
              src={birthdaymemories2}
              alt=""
              className="h-[285px] w-[285px] object-fill rounded-[20px] smDesktop:h-[234.3px] tabletAir:h-[220px]"
            />
          </div>
        </div>
        <div className="w-[30%] smDesktop:w-[40%] mt-[6%]">
          <h2 className="text-[50px] smDesktop:text-[44px] smDesk:text-[42px] font-extrabold leading-[60px] tracking-[-1%] text-[#1A1941] tabletAir:text-[40px] tabletAir:text-[30px] tabletAir:leading-[50px]">
            Birthdays to not Forget
          </h2>
          <p className="text-[#6F6681] text-[16px] leading-[30px] tracking-[-1%] tabletAir:text-[15px]">
            Documenting the milestones and sharing them with people that really
            matter and you care about, This is the highlight of your special
            day.
          </p>
        </div>
      </section>

      {/* wedding highlight */}

      <section className="mt-[100px]">
        <h2 className="text-[50px] font-extrabold leading-[60px] text-center tracking-[-1%] w-[50%] mx-auto text-[#1A1941] smDesktop:w-[60%] smDesk:text-[46px] tabletAir:text-[40px]">
          Wedding Highlights
        </h2>

        <div className="flex w-[90%] mx-auto gap-[40px] mt-[24px]">
          <div className="w-[30%]">
            <img
              src={wedding}
              alt="wedding events"
              className="w-[392px] smDesktop:h-[300px]  object-cover rounded-[20px]"
            />
          </div>
          <div className="w-[40%]">
            <p className="text-[16px] tabletAir:text-[13.5px] tabletAir:w-[96%] leading-[30px] text-center tracking-[-1%] font-medium w-[90%] smDesktop:text-[15px]">
              Not sure every of your guest won’t be able to share in your
              beautiful memories or get to see their pictures and where they
              appear? We got a nifty solution for you and guess what? you are in
              control this time.
            </p>
            <img
              src={weddingParty}
              alt="wedding party"
              className="w-[444px] mt-[82px]"
            />
          </div>
          <div className="w-[30%]">
            <img src={weddingCake} alt="wedding Cake" className="w-[255px]" />
          </div>
        </div>
      </section>

      {/* seminars */}
      <section className="w-[90%] mx-auto">
        <div className="mt-[235px] w-[90%] smDesktop:w-[94%] smDesk:w-[96%] tabletAir:w-[99%] ml-auto flex gap-[63px]">
          <div className="w-[30%] smDesktop:w-[34%]">
            <h3 className="text-[50px] font-extrabold leading-[60px] tracking-[-1%] text-[#1A1941] smDesktop:text-[46px] tabletAir:text-[40px] tablet:text-[38px] text-[#1A1941] smDesk:text-[44px]">
              Seminars can be fun too
            </h3>
            <p className="text-[16px] tabletAir:text-[14px] text-[#6F6681] leading-[30px] tracking-[-1%] font-medium ">
              Hey, we know these things can be sometimes pretty serious but you
              can break the ice with a shared “Picture time”. Preserve that epic
              handshake moment with that multi-millionaire guest speaker that
              inspires you so much.
            </p>
          </div>
          <div className="flex w-[50%] gap-[29px]">
            <img
              src={seminars}
              alt=" Seminars"
              className="w-[50%] h-[320px] smDesktop:w-[55%] tablet:h-[260px] tabletAir:h-[280px] smDesktop:h-[300px] object-cover rounded-[20px] tabletAir:w-[53%]"
            />
            <img
              src={seminarsPresent}
              alt="seminars Presentation"
              className="w-[50%] h-[320px] tablet:h-[260px] smDesktop:w-[55%] tabletAir:h-[280px] tabletAir:w-[53%] smDesktop:h-[300px] rounded-[20px] object-cover mt-[-135px]"
            />
          </div>
        </div>
      </section>

      {/* Epic Festival */}
      <section className="mt-[100px]">
        <div className="w-[90%] mx-auto flex gap-[29px]">
          <div className="w-[40%]">
            <img src={Club} alt="club partying" className="w-[100%]" />
          </div>
          <div className="w-[30%] mt-[10%] smDesk:mt-[7%] ">
            <h2 className="text-[50px] font-extrabold leading-[60px] tracking-[-1%] text-[#1A1941] smDesktop:text-[46px] tabletAir:text-[30px] tablet:text-[30px] tabletAir:leading-[38px] text-[#1A1941] smDesk:text-[38px] text-center">
              Epic Festivals
            </h2>
            <p className="text-[16px] smDesktop:text-[15px] smDesk:text-[14px] text-[#6F6681] leading-[30px] tracking-[-1%] font-medium text-center mt-[24px] smDesk:leading-[26px] tabletAir:leading-[22px] ">
              Nothing screams “Wow, I was also there” like a well-placed and
              timed shot of you with your favorite celebrities or simply just
              having good old fun. Why not share these moments with your friends
              and loved ones? Go ahead, create that event.
            </p>
          </div>
          <div className="w-[23.8%]">
            <img
              src={BurnFire}
              alt="Burn Fire"
              className="flex justify-end ml-auto w-[80%]"
            />
            <img src={Party} alt="Clubing" className="pt-[10px] w-[100%]" />
          </div>
        </div>
      </section>

      {/* other Event */}
      <section className="w-[90%] mx-auto mt-[100px] mb-[100px]">
        <h2 className="text-[50px] font-extrabold leading-[60px] tracking-[-1%] text-[#1A1941] smDesktop:text-[46px] tabletAir:text-[40px] tablet:text-[38px] text-[#1A1941] smDesk:text-[44px]">
          Other Events
        </h2>
        <div className="flex flex-wrap justify-center gap-8 mt-[40px]">
          <span className="text-20px leading-[50px] mr-[40px] text-center tracking-[-1%] px-[20px] border-[1px] border-[#8C8CA0] rounded-[28px] outline-none text-[#1A1941] font-medium">
            Child Dedication
          </span>
          <span className="text-20px leading-[50px] mr-[40px] text-center tracking-[-1%] px-[20px] border-[1px] border-[#8C8CA0] rounded-[28px] outline-none text-[#1A1941] font-medium">
            Business/Product launch
          </span>
          <span className="text-20px  mr-[40px] leading-[50px] text-center tracking-[-1%] px-[20px] border-[1px] border-[#8C8CA0] rounded-[28px] outline-none text-[#1A1941] font-medium">
            Educational Moments
          </span>
          <span className="text-20px  mr-[40px] leading-[50px] text-center tracking-[-1%] px-[20px] border-[1px] border-[#8C8CA0] rounded-[28px] outline-none text-[#1A1941] font-medium">
            Brand Awareness/Symposium
          </span>
          <span className="text-20px  mr-[40px] leading-[50px] text-center tracking-[-1%] px-[20px] border-[1px] border-[#8C8CA0] rounded-[28px] outline-none text-[#1A1941] font-medium">
            Award Shows
          </span>
          <span className="text-20px  mr-[40px] leading-[50px] text-center tracking-[-1%] px-[20px] border-[1px] border-[#8C8CA0] rounded-[28px] outline-none text-[#1A1941] font-medium">
            Political Rallies
          </span>
          <span className="text-20px  mr-[40px] leading-[50px] text-center tracking-[-1%] px-[20px] border-[1px] border-[#8C8CA0] rounded-[28px] outline-none text-[#1A1941] font-medium">
            Health Symposium
          </span>
          <span className="text-20px  mr-[40px] leading-[50px] text-center tracking-[-1%] px-[20px] border-[1px] border-[#8C8CA0] rounded-[28px] outline-none text-[#1A1941] font-medium">
            Movie Premier
          </span>
          <span className="text-20px  mr-[40px] leading-[50px] text-center tracking-[-1%] px-[20px] border-[1px] border-[#8C8CA0] rounded-[28px] outline-none text-[#1A1941] font-medium">
            Trips and Holidays
          </span>
          <span className="text-20px  mr-[40px] leading-[50px] text-center tracking-[-1%] px-[20px] border-[1px] border-[#8C8CA0] rounded-[28px] outline-none text-[#1A1941] font-medium">
            Anniversaries
          </span>
          <span className="text-20px  mr-[40px] leading-[50px] text-center tracking-[-1%] px-[20px] border-[1px] border-[#8C8CA0] rounded-[28px] outline-none text-[#1A1941] font-medium">
            Religious Events
          </span>
          <span className="text-20px  mr-[40px] leading-[50px] text-center tracking-[-1%] px-[20px] border-[1px] border-[#8C8CA0] rounded-[28px] outline-none text-[#1A1941] font-medium">
            Meet and Greet
          </span>
          <span className="text-20px  mr-[40px] leading-[50px] text-center tracking-[-1%] px-[20px] border-[1px] border-[#8C8CA0] rounded-[28px] outline-none text-[#1A1941] font-medium">
            Tech week
          </span>
          <span className="text-20px  mr-[40px] leading-[50px] text-center tracking-[-1%] px-[20px] border-[1px] border-[#8C8CA0] rounded-[28px] outline-none text-[#1A1941] font-medium">
            Trips and Holidays
          </span>
        </div>
      </section>
    </main>
  );
};

export default Creative;
