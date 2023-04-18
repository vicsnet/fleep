import mail from "../../assets/undraw_Opened_re_i38e 1.png";
import Loading from "../../componets/Loading";


const SuccessModal = ({mutate, email, loading}) => {
  return (
    <main
      className="fixed top-0 w-[100%] h-[100%]"
      style={{ background: " rgba(0, 0, 0, 0.25)" }}
    >
      <div className="fixed top-[20%] left-[25%] smDesk:left-[12%] tabletAir:left-[10%]">
       {loading && <div className="mx-auto absolute flex justify-center left-[155px] top-14">

       <Loading />
        </div>}
        <section className=" ">
          <div
            className="px-[80px] pt-[52px] pb-[100px] rounded-[8px]"
            style={{ background: "rgba(255, 255, 255, 1)" }}
          >
            <img src={mail} alt="" className="w-[153px] mx-auto" />
            <h3 className="text-[20px] text-center leading-[24px] font-semibold text-[#1A1941] mt-[32px]">
              Email Verification
            </h3>
            <p className="text-center text-[14px] leading-[16.8px] font-light mt-[15px] w-[60%] mx-auto text-[#666666]">
              A Verification link has been sent to your email address please
              check to verifiy
            </p>
            <div className="mt-[26px] flex gap-1  justify-center ">
              <p className="text-[14px] leading-[16.8px] text-[#8A8A8A] font-normal">
                Did not get an email ?
              </p>

              <div className="cursor-pointer" onClick={() =>mutate({email:email})}>
                <p
                  className="text-[14px] leading-[16.8px] font-semibold text-[#000000
  ]"
                >
                  Resend
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default SuccessModal;
