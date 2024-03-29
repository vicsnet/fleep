import { useState, useEffect } from "react";
import WalletTransactionDetail from "./WalletTransactionDetail";
import useWalletTransaction from "./hooks/useWalletTransaction";
import { FadeLoader } from "react-spinners";
import DashboardError from "../../pages/Dashboard/Error/DashboardError";


const WalletTransaction = () => {
 
const {data, isLoading, isError, error, refetch} = useWalletTransaction()



  return (
    <main>
      <section className="rounded-lg bg-[#FFFFFF] mt-[40px] px-[33px] pb-[36px]">
        <h3 className="text-[20px] font-[600] leading-[24px] text-[#000000] pt-[36px] pl-[27px] ">
          Transaction
        </h3>
{ data?.data?.length === 0 ?
            <section className="mt-[100px] pb-[200px]">
            <p className="text-[24px] font-normal leading-7 mt-5 text-[#6A6A6A] text-center">
              No Transation
            </p>
           
          </section>
          :
          <>
            {isError ?
           <div className="mt-[100px]">

             <DashboardError error={error} refetch={refetch}/>
           </div>
           :
           <>
           
           {
             isLoading ? <div className="flex justify-center mt-4">
             <FadeLoader color="#19192E" />
            </div>
            :
         <table className="w-[100%]  mt-[21px] table-fixed rounded-t-lg border-collapse">
           <thead className="text-left text-[16px] font-[300] leading-[19.2px] bg-[#FAFAFA] h-[70px] rounded-t-lg rounded-lg mb-[10px]">
             <tr className=" pl-[57px] rounded-t-lg">
               <th className="pt-[12px] pb-[12px] font-[500] w-[10%] pl-[45px] smDesk:pl-[30px] tabletAir:pl-[20px] rounded-tl-[14px]">
                 S/N
               </th>
               <th className="pt-[12px] pb-[12px] w-[30%] font-[500]">
                 Account No
               </th>
               <th className="pt-[12px] pb-[12px] w-[20%] font-[500]">
                 Amount
               </th>
               <th className="pt-[12px] pb-[12px] font-[500]">
                 Date
               </th>
               <th className="pt-[12px] pb-[12px] pr-[27px] w-[15%] rounded-tr-[14px] font-[500]">
                 status
               </th>
             </tr>
           </thead>
           <tbody>
             {data?.data?.map((data, i) => (
                 <WalletTransactionDetail key={data.id} id={i+1} no_of_images={data.normal_date} description={data.amount} sender_name={data.bank.account_number
                 } status={data.status}/>
               ))}
           </tbody>
         </table>
           }
           </>
         }
          </>
}
      </section>
    </main>
  );
};

export default WalletTransaction;
