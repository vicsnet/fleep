import React from 'react'
import WalletToken from './WalletToken';
import WalletTransaction from './WalletTransaction';

const WalletDetail = () => {
  return (
    <main className="max-h-screen overflow-y-scroll scrollbar-thin scrollbar-thumb-[#19192E] scrollbar-track-gray-100 scrollbar-thumb-rounded-full scrollbar-track-rounded-full pb-[180px]">
          <section className="px-[40px]">
              
              <WalletToken />
              <WalletTransaction />
      </section>
    </main>
  );
}

export default WalletDetail