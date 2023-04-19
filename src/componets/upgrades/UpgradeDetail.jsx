import React from 'react'
import useFetchUpgrades from './hooks/useFetchUpgrades'
import SingleDetail from './SingleDetail';
import { FadeLoader } from 'react-spinners';
import DashboardError from '../../pages/Dashboard/Error/DashboardError';

const UpgradeDetail = () => {

    const {data, isLoading, isError, error, refetch} = useFetchUpgrades()

   
    
  return (
    <main className="">
      {
      isLoading && 
      
      <div className="flex justify-center mt-3 pb-[160px]">
      <FadeLoader color="#19192E" />
     </div>  }
   
     {isError ? 
    <div className="mt-[100px] mb-[100px]">

        <DashboardError error={error} refetch={refetch}/> 
    </div>:
    <section className="w-[90%] mx-auto border-[1px] border-[#D9D9D9] flex mb-[84px] mt-[38px] rounded-[8px] flex-wrap  lgDesktop:border-[0px] lgDesktop:gap-14 smDesktop:gap-18">
      {
        data?.data?.map((data) =>(

          <SingleDetail key={data.id} title={data.title} amount={data.amount} space={data.space} description={data.description} id={data.id}/>
        ))
      }
  </section>
}
    </main>
  )
}

export default UpgradeDetail