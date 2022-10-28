import Logo from "../assets/LOGO.png";
import { HiOutlinePhone } from "react-icons/hi";
import { SlSocialTwitter } from "react-icons/sl";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  // 09120398537
  return (
    <main className="bg-[]" style={{ background: "rgba(25, 25, 46, 1)" }}>
      <section
        className=" pt-[41px] pb-[26px] w-[90%] mx-auto flex justify-between text-[18px] tablet:text-[14px] leading-[30px] font-normal text-[#FFFFFF]"
        style={{ borderBottom: "1px solid rgba(84, 83, 83, 1)" }}
      >
        <div className="">
          <Link to="/" onClick={() => window.scrollTo(0, 0)}>
            <img src={Logo} alt="" className="w-[126px]" />
          </Link>
        </div>
        <ul className="flex gap-[20px] items-center ">
          <Link to="/privacy" onClick={() => window.scrollTo(0, 0)}>
            <li>Privacy Policy</li>
          </Link>
          <Link to="/terms" onClick={() => window.scrollTo(0, 0)}>
            <li>Terms & Condition</li>
          </Link>
        </ul>
        <ul className="flex items-center text-[18px] tablet:text-[14px]">
          <li className="flex items-center gap-[10.41px] pr-[31px]">
            <HiOutlinePhone /> +234801234567
          </li>
          <div className="flex gap-[24px] cursor-pointer">
            <li>
              <SlSocialTwitter />
            </li>
            <li>
              <FaFacebookF />
            </li>
            <li>
              <BsInstagram />
            </li>
          </div>
        </ul>
      </section>
      <p className="text-[#D9D9D9] text-center text-[11px] font-normal leading-[30px]">
        {" "}
        © Copyright 2022
      </p>
    </main>
  );
};

export default Footer;
