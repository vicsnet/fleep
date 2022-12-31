import React from 'react'
import { useDispatch } from 'react-redux';
import { openWithdrawToBank } from '../../Redux/features/wallet/walletSlice';

const WalletToken = () => {

  const dispatch = useDispatch()
  return (
    <main>
      <section className="flex gap-[40px] mt-[36px] tabletAir:flex-col ">
        {/*Total Transaction Card  */}
        <div
          className="bg-[#FFFFFF] pl-[35px] pt-[33px] rounded-lg pb-[88px] w-[343px] smDesk:w-[290px]  tabletAir:mx-auto"
          style={{ border: "1px solid rgba(229, 229, 229, 1)" }}
        >
          <h4 className="text-[14px] font-[300] leading-[16.8px] text-[#393C3F]">
            Total Transaction
          </h4>

          {/* total fund */}
          <h1 className="font-bold text-[46px] leading-[55.2px] text-[#1A1941] mt-[16px]">
            ₦20,000
          </h1>
        </div>
        {/*Total Transaction Card  */}

        {/*Total withdrawn card  */}
        <div
          className="bg-[#FFFFFF] pl-[35px] pt-[33px] rounded-lg pb-[23px] w-[343px] smDesk:w-[290px] tabletAir:mx-auto"
          style={{ border: "1px solid rgba(229, 229, 229, 1)" }}
        >
          <h4 className="text-[14px] font-[300] leading-[16.8px] text-[#393C3F]">
            Total Withdrawn
          </h4>

          {/* total fund */}
          <h1 className="font-bold text-[46px] leading-[55.2px] text-[#1A1941] mt-[16px]">
            ₦8,000
          </h1>

          <div className="mt-[24px]">
            <button
              onClick={() => dispatch(openWithdrawToBank())}
              className="bg-[#1A1941] text-[#FFFFFF] px-[12.5px] h-[41px] rounded-[4px] font-bold text-[14px]"
            >
              Withdraw to bank
            </button>
          </div>
        </div>
        {/*Total Withdrawn Card  */}
      </section>
    </main>
  );
}

export default WalletToken