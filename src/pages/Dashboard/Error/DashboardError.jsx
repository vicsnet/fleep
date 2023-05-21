import React, { useEffect } from 'react'
import { MdOutlineRefresh } from "react-icons/md";


const DashboardError = ({error, refetch}) => {
  console.log("E",error)
  useEffect(()=>{
if(error.message ==="Request failed with status code 401"){
  document.location.replace("/login");
}
  },[error])
  return (
    <div className="grid place-content-center gap-1">
      <p>{error?.message} 😢</p>
      <p className="flex items-center justify-center font-bold cursor-pointer" onClick={refetch}>
        retry <MdOutlineRefresh />
      </p>
    </div>
  )
}

export default DashboardError