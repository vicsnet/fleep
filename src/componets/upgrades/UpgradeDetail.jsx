import React from 'react'
import useFetchUpgrades from './hooks/useFetchUpgrades'
import usePurchasePlan from './hooks/usePurchasePlan';
import SingleDetail from './SingleDetail';

const UpgradeDetail = () => {

    const {data, isLoading, isError, error, refetch} = useFetchUpgrades()

   
    
  return (
    <section className="w-[90%] mx-auto border-[1px] border-[#D9D9D9] flex mb-[84px] mt-[38px] rounded-[8px] ">
      {
        data?.data?.map((data) =>(

          <SingleDetail key={data.id} title={data.title} amount={data.amount} space={data.space} description={data.description} id={data.id}/>
        ))
      }
  </section>
  )
}

export default UpgradeDetail