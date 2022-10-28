import ContactForm from './ContactForm';

import Happy from '../assets/Rectangle 5183.png'
import convocation from "../assets/Rectangle 5184.png";
import musicFest from "../assets/Rectangle 5185.png";

const Contact = () => {
  return (
    <main className="mt-[100px] mb-[147px]">
      <section>
        <div className=" flex gap-[105px] w-[90%] mx-auto">
          <section className="w-[50%] flex flex-col">
            <div className="">
              <img
                src={Happy}
                alt="Happy movement"
                className="w-[90%] mb-[50px] smDesktop:w-[94%]"
              />
              <img
                src={convocation}
                alt="Happy convocation"
                className="w-[80%] ml-auto mb-[50px] smDesktop:w-[90%]"
              />
              <img
                src={musicFest}
                alt="music festival"
                className="w-[55%] ml-[50px] mx-auto smDesktop:w-[60%] smDesktop:ml-[6px] "
              />
            </div>
          </section>
          <section className="w-[50%]">
            <h2 className="text-[80px] font-extrabold leading-[100px] tracking-[-1%] capitalize w-[100%] lg:text-[70px] smDesktop:text-[55px] smDesk:text-[50px] tabletAir:text-[40px] tabletAir:leading-[58px] smDesk:leading-[70px] smDesktop:leading-[80px]">
              Get In touch with Our Team
            </h2>
            <ContactForm />
          </section>
        </div>
      </section>
    </main>
  );
}

export default Contact