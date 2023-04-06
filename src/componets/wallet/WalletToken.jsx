/** @format */

import React from "react";
import { useDispatch } from "react-redux";
import { openWithdrawToBank } from "../../Redux/features/wallet/walletSlice";
import ProfileUseFetch from "../../pages/profile/hooks/profileUseFetch";
import { Skeleton, Space } from "antd";
import DashboardError from "../../pages/Dashboard/Error/DashboardError";

const WalletToken = () => {
  const { data, isError, isLoading, error, refetch } = ProfileUseFetch();
  const dispatch = useDispatch();
  return (
    <main>
      <section className="flex gap-[40px] mt-[36px] tabletAir:flex-col ">
        {
          isError && 
          <div className="flex justify-center items-center mx-auto pt-[33px] pb-[88px]">

            <DashboardError error={error} refetch={refetch}/>
          </div>

        
          
        }
        {/*Total Transaction Card  */}
        <div
          className={`${isError ? "hidden " : "block"} bg-[#FFFFFF] pl-[35px] pt-[33px] rounded-lg pb-[88px] w-[343px] smDesk:w-[290px]  tabletAir:mx-auto`}
          style={{ border: "1px solid rgba(229, 229, 229, 1)" }}
        >
          <h4 className="text-[14px] font-[300] leading-[16.8px] text-[#393C3F]">
            Total Transaction
          </h4>
          {isLoading ? (
            <Space direction="horizontal" className="mt-8">

              <Skeleton
              active
              title={false}
              paragraph={{ row: 1, width: [200, 0] }}
            />
            </Space>
          ) : (
            // {/* total fund */}
            <h1 className="font-bold text-[46px] leading-[55.2px] text-[#1A1941] mt-[16px]">
              ₦{data?.data?.wallet_balance}
            </h1>
          )}
        </div>
        {/*Total Transaction Card  */}

        {/*Total withdrawn card  */}
        <div
          className={` ${isError ? "hidden " : "block"} bg-[#FFFFFF] pl-[35px] pt-[33px] rounded-lg pb-[23px] w-[343px] smDesk:w-[290px] tabletAir:mx-auto`}
          style={{ border: "1px solid rgba(229, 229, 229, 1)" }}
        >
          <h4 className="text-[14px] font-[300] leading-[16.8px] text-[#393C3F]">
            Total Withdrawn
          </h4>

          {/* total fund */}
          {
          isLoading ? (
            <Space direction="vertical" className="mt-8">

              <Skeleton
              active
              title={false}
              paragraph={{ row: 1, width: [200, 0] }}
            />
              <Skeleton.Button style={{ width: 150 }}> </Skeleton.Button>
            </Space>
          )
            :
            <>
          <h1 className="font-bold text-[46px] leading-[55.2px] text-[#1A1941] mt-[16px]">
            ₦{data?.data?.total_withdrawal}
          </h1>

          <div className="mt-[24px]">
            <button
              onClick={() => dispatch(openWithdrawToBank())}
              className="bg-[#1A1941] text-[#FFFFFF] px-[12.5px] h-[41px] rounded-[4px] font-bold text-[14px]"
            >
              Withdraw to bank
            </button>
          </div>
            </>
            }
        </div>
        {/*Total Withdrawn Card  */}
      </section>
    </main>
  );
};

export default WalletToken;
