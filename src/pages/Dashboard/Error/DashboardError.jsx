import React from 'react'
import { MdOutlineRefresh } from "react-icons/md";

const DashboardError = ({error, refetch}) => {
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