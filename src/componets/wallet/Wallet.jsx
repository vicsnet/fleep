import React from 'react'
import SideNav from '../SideNav'
import WalletDetail from './WalletDetail';

const Wallet = () => {
  return (
    <main>
          <SideNav title="Wallet" display="flex" />
          <WalletDetail />
    </main>
  );
}

export default Wallet