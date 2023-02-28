import React, {useState} from 'react'
import { FiArrowRightCircle } from "react-icons/fi";
import useGetImages from './eventhooks/useGetImages';
import { useParams } from 'react-router-dom';
import EventSingleImages from './EventSingleImages';

const EventImages = () => {
  const {id} = useParams()
    const {data, isLoading} = useGetImages(id); 

    // console.log(data)
    const [show, setShow] = useState(8);
    const showAll = () => {
      setShow((prevValue) => prevValue + data?.data?.length);
    };

  return (
    <section className="mt-[80px] pb-[100px] flex flex-wrap gap-4 relative">
      {data?.data?.slice(0, show).map((images, index)=>(

        <div key={index} className="relative">

        <EventSingleImages imag={images.thumbnail_url} i={index}/>

        </div>
      )
      )}
      {data?.data?.length >= show && (
            <div
              className="w-[290px] h-[290px] right-5 bSemiBig:w-[270px] bSemiBig:h-[270px] bSemiBig:right-1 bSemismall:right-3 bSemismall:h-[250px] bSemismall:w-[250px] lgDesktop:w-[220px] smDesktop:w-[160px] smDesktop:h-[160px] lgDesktop:h-[220px] smDesk:w-[142px] smDesk:h-[142px]  tabletAir:w-[250px] tabletAir:h-[250px] tablet:w-[226px] tablet:h-[226px]  lgDesktop:right-12 smDesktop:right-10 smDesk:right-2 absolute tabletAir:right-4  bottom-[100px] rounded-lg"
              style={{ background: "rgba(0, 0, 0, 0.4)" }}
            >
              <button
                onClick={showAll}
                className="text-[white] flex items-center text-[20px] leading-[24px] font-bold my-[50%] outline-none justify-center mx-[70px] lgDesktop:mx-[40px] smDesktop:mx-[20px] smDesk:mx-auto smDesk:my-[45%]"
              >
                View all <FiArrowRightCircle className="ml-[18px]" />
              </button>
            </div>
          )} 
          </section>
  )
}

export default EventImages