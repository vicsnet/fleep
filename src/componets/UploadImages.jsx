import { useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { FiUpload } from "react-icons/fi";
import { useDropzone } from "react-dropzone";
// import "react-dropzone-uploader/dist/styles.css";
// import Dropzone from "react-dropzone-uploader";

import { useSelector, useDispatch } from "react-redux";
import { uploadCloseImage } from "../Redux/features/uploadDPSlice";
import { Upload, Spin } from "antd";

// import "antd/dist/reset.css";


const UploadImage = () => {
  const [files, setFiles] = useState([]);

  const open = useSelector((state) => state.uploadDp.imageOpen);
  const dispatch = useDispatch();


  if (open) return null;
  return (
    <section
      className="fixed top-0 max-h-screen h-screen w-[100%] overflow-y-scroll scrollbar-thin scrollbar-thumb-[#19192E] scrollbar-track-gray-100 scrollbar-thumb-rounded-full scrollbar-track-rounded-full"
      style={{ background: "rgba(20, 24, 31, 0.25)" }}
    >
      <div
        className="w-[50%] smDesktop:w-[50%] smDesk:w-[55%] tabletAir:w-[60%] tablet:w-[65%] rounded-lg mt-[170px] mx-auto  pb-[60px] mb-[60px]"
        style={{ background: "rgba(255, 255, 255, 1)" }}
      >
        <div className="w-[90%] mx-auto">
          <div className="pt-[54px] flex gap-[8rem] justify-end">
            <h2 className="text-[24px] font-bold leading-7 text-[#1A1941]">
              Upload Images
            </h2>
            <IoIosCloseCircleOutline
              onClick={() => dispatch(uploadCloseImage())}
              size={24}
              className="text-[#7C7B7B]"
            />
          </div>

          <form className="mt-[40px]">
            <div className=" mt-[32px]">
              <div className="w-[80%] mx-auto">
                <div
                  className="mt-[15px]  flex justify-center items-center">
                  

                  <div className="cursor-pointer w-[100%]">
                    <Upload.Dragger 
                      multiple={true}
                      listType="picture"
                      showUploadList={{ showRemoveIcon: true }}
                      accept=".png,.jpeg,.jpg"
                      beforeUpload={(file) => {
                        return false;
                      }}
                      iconRender={() => {
                        return <Spin></Spin>;
                      }}
                      progress={{
                        strokeWidth: 3,
                        strokeColor: {
                          "0%": "#f0f",
                          "100%": "#ff0",
                        },
                        style: {
                          top: 12,
                        },
                      }}
                    >
                      <FiUpload size={20} className="text-[#EE2339] mx-auto" />
                      <p className="text-[16px] font-normal leading-5 text-center text-[#8B8B8B] mt-[12px]">
                        Drag and drop files or click upload
                      </p>
                    </Upload.Dragger>
                  </div>

                  {/* <>{images}</> */}
                </div>

                
              </div>
            </div>

            {/* button */}
            <div className="w-[60%] mx-auto flex justify-between">
              <button className="border-[#1A1941] border-[1px] rounded-lg h-[50px] mt-[50px] px-[55px] text-[#1A1941] tracking-[10%] text-[16px] leading-5 font-extrabold">
                Cancel
              </button>
              <button className="bg-[#1A1941] rounded-lg h-[50px] mt-[50px] px-[58px] text-[#FFFFFF] tracking-[10%] text-[16px] leading-5 font-extrabold">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* <EventQR /> */}
    </section>
  );
};

export default UploadImage;
