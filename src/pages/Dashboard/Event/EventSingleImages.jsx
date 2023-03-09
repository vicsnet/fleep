import { Field } from 'rc-field-form'
import React, {useState} from 'react'

const EventSingleImages = ({imag, i, change, checkm, ima, val, id, }) => {


  return (
    <>

          <img key={i}
        
                src={imag}
                alt=""
                className={`w-[290px] h-[290px] bSemiBig:w-[270px] bSemiBig:h-[270px] bSemismall:w-[250px] bSemismall:h-[250px] lgDesktop:w-[220px] lgDesktop:h-[220px] smDesktop:w-[160px] smDesktop:h-[160px] smDesk:w-[142px] smDesk:h-[142px] tablet:w-[226px] tablet:h-[226px] object-fill rounded-lg relative tabletAir:w-[250px] tabletAir:h-[250px]`}
              />


              <input
                id={id}
                type="checkbox"
                name={ima}
                value={val}
                checked={checkm}
                onChange={change}
                className="w-6 h-6 accent-[#1A1941]  rounded border-[#6A6A6A] border-[0px] absolute top-[16px] right-[16px]"
              />
    
    </>
  )
}

export default EventSingleImages