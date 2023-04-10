/** @format */

import React, { useState, useEffect, useRef } from "react";
import SideNav from "../../../componets/SideNav";
import { CiEdit } from "react-icons/ci";
import { AiOutlinePlus } from "react-icons/ai";
import { IoLayers } from "react-icons/io5";
import { BiChevronDown, BiUpload } from "react-icons/bi";
import { FiCopy, FiArrowRightCircle } from "react-icons/fi";
import copy from "copy-to-clipboard";
import union from "../../../assets/SVG/Union (1).svg";
import union2 from "../../../assets/SVG/Union (2).svg";
// import AddUser from "./AddUser";
import { useDispatch } from "react-redux";
import { openEvent } from "../../../Redux/features/createEventSlice";
import { openAddUser } from "../../../Redux/features/addUserSlice";
import EVeimage from "../../../assets/SVG/Vector5.svg";
import { uploadOpenImage } from "../../../Redux/features/uploadDPSlice";
import useFetchSingleEvent from "./eventhooks/useFetchSingleEvent";
import { useParams } from "react-router-dom";
import { Skeleton, Space } from "antd";
import EventImages from "./EventImages";
import useGetImages from "./eventhooks/useGetImages";
import useDeleteImages from "./eventhooks/useDeleteImages";
import useComponentVisible from "../../../hooks/useComponentVisible";
import { toast } from "react-toastify";
import { FadeLoader } from "react-spinners";
import DashboardError from "../Error/DashboardError";

const CreatedEvent = () => {
  const { id } = useParams();

  const {
    ref,
    isComponentVisible: openBulk,
    setIsComponentVisible: setOpenBulk,
  } = useComponentVisible(false);

  const { data, isLoading, isError, error:singleError, refetch} = useFetchSingleEvent(id);

  const { data: images, isLoading:imageLoading, isError: imageIsError, error:imageError , refetch:imageRefetch } = useGetImages(id);

  const dispatch = useDispatch();
  const [selectedImage, setSelectedImage] = useState([]);

 

  const text = data?.data?.code;

  const copyToClipboard = () => {
    copy(String(data?.data?.code));
    toast.success(`You have copied "${text}"`);
  };

  const {
    mutate,
    isLoading: DeleteLoading,
    isError: DeleteError,
    isSuccess: DeleteSuccess,
    error,
  } = useDeleteImages({ id });

  const handleDelete = () => {
    const checkedinputvalue = [];
    for (let i = 0; i < selectedImage.length; i++) {
      if (selectedImage[i].isChecked === true) {
        checkedinputvalue.push(String(selectedImage[i].thumbnail_url));
      }
    }

    mutate({ images_url: checkedinputvalue });
  };
  
  useEffect(() => {
    if (DeleteError) {
      toast.error(error?.response?.data?.message);
    }
    if (DeleteSuccess) {
      toast.success("Event image(s) deleted successfully");
    }
  }, [DeleteError, DeleteSuccess]);

  return (
    <main className="w-[100%] h-screen max-h-screen overflow-y-scroll scrollbar-thin scrollbar-thumb-[#19192E] scrollbar-track-gray-100 scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
      <SideNav title="Event" display="flex" />
      <section className="mt-[32px] px-[42px]">
        {/*  */}
        { isError ?
           <div className="mt-[100px]">

             <DashboardError error={singleError} refetch={refetch}/>
           </div> :
        <section className="flex justify-between">
          {/* event details */}
          <div className="flex">
            {isLoading ? (
              <Skeleton.Image></Skeleton.Image>
            ) : (
              <img
                src={data?.data?.coverphoto}
                alt=""
                className="w-[150px] h-[150px] object-cover rounded-lg smDesk:w-[100px] smDesk:h-[100px]"
              />
            )}
            <div>
              <div className="ml-[35px]">
                {isLoading ? (
                  <Skeleton
                    active
                    title={false}
                    paragraph={{ row: 2, width: [130, 130] }}
                  />
                ) : (
                  <div>
                    <h3 className="text-[30px] font-semibold leading-9 text-[#1A1941] smDesk:text-[24px] capitalize">
                      {data?.data?.title}
                    </h3>

                    <p className="text-[#8A8A8A] text-[16px] font-normal leading-5 mt-2 smDesk:text-[14px]">
                      {data?.data?.date}
                    </p>
                  </div>
                )}

                {isLoading ? (
                  <Space direction="horizontal" className="mt-2">
                    <Skeleton
                      active
                      title={false}
                      paragraph={{ row: 1, width: [130, 130] }}
                    />
                  </Space>
                ) : (
                  <div>
                    <div className="flex items-center mt-[27.5px]">
                      <img src={union} alt="" className="w-[20px] h-[20px]" />
                      <p className="text-[16px] leading-5 font-normal ml-[10px] smDesk:text-[14px] capitalize">
                        {data?.data?.category}
                      </p>
                    </div>

                    <div className="flex items-center mt-[17px]">
                      <img src={union2} alt="" className="w-[20px] h-[20px]" />
                      <p className="text-[16px] leading-5 font-normal ml-[10px] smDesk:text-[14px] capitalize ">
                        {data?.data?.venue}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* event Code and edit */}
          <div className="">
            {/* edit button */}
            {isLoading ? (
              <Space className="flex items-center mb-3 justify-end">
                <Skeleton active paragraph={false} title={{ width: 60 }} />
              </Space>
            ) : (
              <div
                className="flex items-center mb-3 justify-end"
                onClick={() => dispatch(openEvent())}
              >
                <CiEdit size={20} className="text-[#7C7B7B] cursor-pointer" />
                <p className="text-[16px] ml-[10px] cursor-pointer smDesk:text-[14px]">
                  Edit
                </p>
              </div>
            )}

            {/*  */}
            <div className="flex">
              {isLoading ? (
                <Skeleton.Image></Skeleton.Image>
              ) : (
                <img
                  src={data?.data?.qr}
                  alt=""
                  className="w-[75px] h-[75px] smDesk:w-[60px] smDesk:h-[60px]"
                />
              )}

              {isLoading ? (
                <Space className="ml-[20px]">
                  <Skeleton
                    active
                    title={false}
                    paragraph={{ row: 2, width: [90, 90] }}
                  />
                </Space>
              ) : (
                <div className="flex flex-col ml-[20px]">
                  <h2 className="text-[16px] font-bold leading-5 text-[#8B8B8B] smDesk:text-[14px]">
                    Event Code:
                  </h2>
                  <div className="flex items-center">
                    <p className="text-[16px] leading-5 font-normal text-[#19192E] smDesk:text-[14px] ">
                      {data?.data?.code}
                    </p>
                    <FiCopy
                      size={16}
                      className="text-[#EE2339] ml-[10px]"
                      onClick={copyToClipboard}
                    />
                  </div>
                </div>
              )}
            </div>

            <div className="">
              {isLoading ? (
                <Space className="mt-[14px] flex justify-center">
                  <Skeleton.Button style={{ width: 150 }}> </Skeleton.Button>
                </Space>
              ) : (
                <button
                  onClick={() => dispatch(openAddUser())}
                  className="text-[16px] flex items-center font-bold leading-5 border-[1px] border-[#1A1941] text-[#1A1941] h-12 px-8 rounded-lg ml-auto mt-[14px] smDesk:text-[14px]"
                >
                  <AiOutlinePlus size={20} className="mr-2" /> Add Users
                </button>
              )}
            </div>
          </div>
        </section>
         }

        {/*  */}

        <section className="">
          {/* menu */}
          <div className="flex items-center justify-between mt-5">
            <h3 className="text-[#1A1941] text-[24px] leading-7 font-semibold">
              Photos
            </h3>

            {/* if there is photos */}

            <div className={`${images?.data?.length == 0 && "hidden"} flex`}>
              <div ref={ref} className="flex flex-col relative">
                <div
                  onClick={() => {
                    setOpenBulk(!openBulk);
                  }}
                  className="flex justify-between items-center bg-[#FFFFFF] h-[49px] px-6 w-[170px] relative cursor-pointer"
                >
                  <IoLayers size={16} className="text-[#1A1941]" />
                  <p className="text-[#1A1941] flex text-[16] font-bold items-center">
                    Bulk Action
                  </p>
                  <BiChevronDown className="text-[grey] text-[16px]" />
                </div>
                <div
                  className={`bg-[#FFFFFF] mt-[55px] w-[220px] h-[120px] rounded-[4px] absolute z-[1] ${
                    openBulk === false && "h-0 hidden"
                  }`}
                  style={{
                    boxShadow: "0px 0px 10px 0px rgba(132, 132, 132, 0.15)",
                  }}
                >
                  <p
                    onClick={handleDelete}
                    className="font-[400] text-[16px] leading-[20px] mt-[8px]  h-[48px] text-[#181818] pl-[34.5px] with py-[10px] hover:text-[black] border-t-[1px] border-b-[1px]"
                  >
                    {DeleteLoading ? "Deleting..." : "Delete"}
                  </p>
                </div>
              </div>

              <div className="">
                <button
                  onClick={() => dispatch(uploadOpenImage())}
                  className="text-[16px] flex items-center font-bold leading-5 border-[1px] bg-[#1A1941] text-white h-12 px-8 rounded-lg ml-[20px]"
                >
                  <BiUpload size={20} className="mr-2" /> Upload Images
                </button>
              </div>
            </div>
          </div>
          {/*  */}
        </section>

        {images?.data?.length == 0 ? (
          // no upload yet

          <section className="mt-[100px] pb-[200px]">
            <img src={EVeimage} alt="" className="h-[70px] w-[70px] mx-auto" />
            <p className="text-[24px] font-normal leading-7 mt-5 text-[#6A6A6A] text-center">
              No photos uploaded
            </p>
            <div className="mt-[50px]">
              <button
                onClick={() => dispatch(uploadOpenImage())}
                className="text-[16px] flex items-center font-bold leading-5 border-[1px] bg-[#1A1941] text-white h-12 px-8 rounded-lg mx-auto"
              >
                <BiUpload size={20} className="mr-2" /> Upload Images
              </button>
            </div>
          </section>
        ) : (
          // uploads
          <>
           { imageIsError &&
           <div className="mt-[100px]">

             <DashboardError error={imageError} refetch={imageRefetch}/>
           </div>
         }
          { imageLoading && <div className="flex justify-center mt-4">
          <FadeLoader color="#19192E" />
         </div>}
        
          <EventImages
            selectImage={selectedImage}
            setSelectImage={setSelectedImage}
          />
          </>

        )}
        <div className=""></div>
      </section>
    </main>
  );
};

export default CreatedEvent;
