import { useState } from "react";
import ViewEvent from "./ViewEvent";

const WalletTransactionDetail = ({ id }) => {
  const [openViewEvent, setOpenViewEvent] = useState(false);
  return (
    <>
      <tr key={id} className="border-b-[1px] border-[#EDEDED] text-[#6A6A6A] ">
        <td className="pl-[45px] smDesk:pl-[30px] tabletAir:pl-[20px] text-[14px leading-[16.8px] font-[300] py-auto pt-[10px] pb-[10px] ">
          {id}
        </td>
        <td
          //   onClick={() => dispatch(openUsersEvent())}
          className=" cursor-pointer text-[14px] leading-[16.8px] font-[300] pt-[10px] pb-[10px]"
        >
          Tejiri Tabor
        </td>

        <td className=" text-[14px] leading-[16.8px] font-[300]  pt-[10px] pb-[10px] ">
          Henry’s wedding
        </td>
        <td className=" text-[14px] leading-[16.8px] font-[300] pt-[10px] pb-[10px]">
          1961
        </td>

        <td
          onClick={() => setOpenViewEvent(!openViewEvent)}
          className=" text-[24px] leading-[16.8px] font-[700] pt-[10px] pb-[10px] text-[#7C7B7B] cursor-pointer"
        >
          ...
          <ViewEvent
            open={openViewEvent}
            onClose={() => setOpenViewEvent(false)}
          />
        </td>
      </tr>
    </>
  );
};

export default WalletTransactionDetail;
