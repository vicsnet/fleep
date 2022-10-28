import React from "react";

const ContactForm = () => {
  return (
    <main className="mt-[60px]">
      <section>
        <form>
          <label
            htmlFor=""
            className="text-[16px] leading-[19.2px] font-normal text-[#333333] mb-[4px]"
          >
            Full Name
          </label>
          <br />
          <input
            type="text"
            placeholder="Enter full name"
            className="w-[80%] h-[40px] rounded-[8px] pl-[20px] outline-none border-[1px] border-[#E5E5E5] bg-[#F9F9F9] text-[14px] leading-[16.8px] font-light text-[#999999]"
          />{" "}
          <br />
          <br />
          <label
            htmlFor=""
            className="text-[16px] leading-[19.2px] font-normal text-[#333333] mb-[4px]"
          >
            Email
          </label>
          <br />
          <input
            type="email"
            placeholder="Enter Email"
            className="w-[80%] h-[40px] rounded-[8px] pl-[20px] outline-none border-[1px] border-[#E5E5E5] bg-[#F9F9F9] text-[14px] leading-[16.8px] font-light text-[#999999]"
          />
          <br />
          <br />
          <label
            htmlFor=""
            className="text-[16px] leading-[19.2px] font-normal text-[#333333] mb-[4px]"
          >
            Phone Number
          </label>
          <br />
          <input
            type="text"
            placeholder="Enter phone number"
            className="w-[80%] h-[40px] rounded-[8px] pl-[20px] outline-none border-[1px] border-[#E5E5E5] bg-[#F9F9F9] text-[14px] leading-[16.8px] font-light text-[#999999]"
          />
          <br />
          <br />
          <label
            htmlFor=""
            className="text-[16px] leading-[19.2px] font-normal text-[#333333] mb-[4px]"
          >
            Message
          </label>
          <br />
          <textarea
            type="text"
            placeholder="Type here..."
            className="w-[80%] h-[130px] rounded-[8px] pt-[10px] px-[20px] outline-none border-[1px] border-[#E5E5E5] bg-[#F9F9F9] text-[14px] leading-[16.8px] font-light text-[#999999]"
          />
          <br />
          <br />
          <br />
          <button className="text-[16px] leading-[19.2px] tracking-[10%] font-bold w-[80%] text-center py-[17px] bg-[#000000] text-[#FFFFFF] rounded-[8px]">
            Submit
          </button>
        </form>
      </section>
    </main>
  );
};

export default ContactForm;
