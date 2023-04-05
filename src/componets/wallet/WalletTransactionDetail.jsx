// import { useState } from "react";
// import ViewEvent from "./ViewEvent";

const WalletTransactionDetail = ({ id , no_of_images, description, sender_name, singleId, status}) => {
  // const [openViewEvent, setOpenViewEvent] = useState(false);
  return (
    <>
      <tr key={id} className="border-b-[1px] border-[#EDEDED] text-[#6A6A6A] ">
        <td className="pl-[45px] smDesk:pl-[30px] tabletAir:pl-[20px] text-[14px leading-[16.8px] font-[300] py-auto pt-[15px] pb-[15px] ">
          {id}
        </td>
        <td
          //   onClick={() => dispatch(openUsersEvent())}
          className=" cursor-pointer text-[14px] leading-[16.8px] font-[300] pt-[10px] pb-[10px]"
        >
          {sender_name}
        </td>

        <td className=" text-[14px] leading-[16.8px] font-[300]  pt-[15px] pb-[15px] ">
          {description}
        </td>
        <td className=" text-[14px] leading-[16.8px] font-[300] pt-[15px] pb-[15px]">
          {no_of_images}
        </td>

        <td className=" relative text-[14px] leading-[16.8px] font-[400] pt-[15px] pb-[15px] text-[#7C7B7B] cursor-pointer">
          {status}
          {/* <h3 onClick={() => setOpenViewEvent(!openViewEvent)}>...</h3>
          <ViewEvent
            open={openViewEvent}
            singleId={singleId}
            onClose={() => setOpenViewEvent(false)}
          /> */}
        </td>
      </tr>
    </>
  );
};

export default WalletTransactionDetail;
