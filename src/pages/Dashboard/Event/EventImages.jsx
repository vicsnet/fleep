/** @format */

import React, { useState } from "react";
import { FiArrowRightCircle } from "react-icons/fi";
import useGetImages from "./eventhooks/useGetImages";
import { useParams } from "react-router-dom";
import EventSingleImages from "./EventSingleImages";
import { Skeleton, Space } from "antd";
import { FadeLoader } from "react-spinners";

const EventImages = ({selectImage, setSelectImage, onSucces}) => {
  const { id } = useParams();
  const { data, isLoading } = useGetImages(id);

  // console.log(data);

  const [show, setShow] = useState(8);
  // const [selectImage, setSelectImage] = useState([]);
  const showAll = () => {
    setShow((prevValue) => prevValue + data?.data?.length);
  };

  const handleChange = (e) => {
    const { name, checked } = e.target;
    const selectedData = selectImage.length === 0 ? data?.data : selectImage;

    const checkedValue = selectedData.map((data) =>
      data?.thumbnail_url === name ? { ...data, isChecked: checked } : data
    );
    setSelectImage(checkedValue);
  
  };
 

  return (
    <div>
   
<section className="mt-[80px] pb-[100px] flex flex-wrap gap-4 relative">
  {data?.data?.slice(0, show)?.map((images, index) => (

    
    <div key={index} className="relative"> 
      <EventSingleImages
        loading={isLoading}
        id={index}
        imag={images?.thumbnail_url}
        i={index}
        ima={images?.thumbnail_url}
        checkm={images.isChecked}
        val={images.thumbnail_url}
        change={handleChange}
      />
    </div>
  
    

  ))}

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

</div>
  );
};

export default EventImages;
