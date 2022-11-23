import vector from "../assets/Group 201.png";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { useDispatch } from 'react-redux'
import { openEvent } from "../Redux/features/createEventSlice";


const CreateEvent = () => {
const dispatch = useDispatch()

  return (
    <div
      className="rounded-[14px] pt-[38px] pl-[34px] relative h-[290px] smDesktop:h-[230px] smDesk:h-[300px] tablet:h-[270px] cursor-pointer "
      onClick={()=> dispatch(openEvent())}
      style={{ background: "rgba(255, 255, 255, 1)" }}
    >
      <h2 className="text-[20px] leading-[24px] font-[500] text-[#191D23]">
        Create Event
      </h2>
      <p className="text-[#86898D] text-[12px] font-[500] leading-[18px] tracking-[0.3px] mt-[5px]">
        Lest’s Start.
      </p>
      <img src={vector} alt="" className="w-[254px] relative" />
      <BsFillArrowRightCircleFill
        size={24}
        className="text-[#E00018] absolute bottom-[44px]"
      />
    </div>
  );
};

export default CreateEvent;
