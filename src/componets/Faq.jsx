import React, { useState } from "react";

import { faq } from "../faq";
import Accordion from "./Accordion";

const Faq = () => {
 

  return (
    <main>
      <h2 className="text-[50px] leading-[60px] tracking-[-1%] font-extrabold text-[#1A1941] text-center pt-[93px] ">
        Frequently Asked Questions
      </h2>
      {/*  */}
      <section className="w-[74%] mx-auto">
        <div className="">
          {faq.map(({title, details, id}) => (
           <Accordion title={title} details={details} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Faq;
