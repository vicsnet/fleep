import { useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { FiUpload } from "react-icons/fi";
import { useDropzone } from "react-dropzone";
// import "react-dropzone-uploader/dist/styles.css";
// import Dropzone from "react-dropzone-uploader";

import { useSelector, useDispatch } from "react-redux";
import { uploadCloseImage } from "../Redux/features/uploadDPSlice";
import { Upload, Spin } from "antd";
import { useParams } from "react-router-dom";
import useUploadEventImages from "../pages/Dashboard/Event/eventhooks/useUploadEventImages";

// import "antd/dist/reset.css";


const UploadImage = () => {

  const {id} = useParams();
  
  const [fileList, setFileList] = useState([]);

  console.log(fileList);

  const open = useSelector((state) => state.uploadDp.imageOpen);
  const dispatch = useDispatch();


const {mutate, isLoading, isError, isSuccess} = useUploadEventImages(id);

const handleSubmit =(e)=>{
  e.preventDefault();
  const upload = [FileList.File];
  
  mutate({images
    :upload[upload]})
}

const onChange = ({ fileList: newFileList }) => {
  setFileList(newFileList);
};

  if (open) return null;
  return (
    <section
      className="fixed top-0 max-h-screen h-screen w-[100%] overflow-y-scroll scrollbar-thin scrollbar-thumb-[#19192E] scrollbar-track-gray-100 scrollbar-thumb-rounded-full scrollbar-track-rounded-full"
      style={{ background: "rgba(20, 24, 31, 0.25)" }}
    >
      <div
        className="w-[45%] smDesktop:w-[45%] smDesk:w-[55%] tabletAir:w-[60%] tablet:w-[65%] rounded-lg mt-[170px] mx-auto  pb-[60px] mb-[60px]"
        style={{ background: "rgba(255, 255, 255, 1)" }}
      >
        <div className="w-[90%] mx-auto">
          
          <div className="pt-[54px] flex justify-center">
            <h2 className="text-[24px] font-bold leading-7 text-[#1A1941]">
              Upload Images
            </h2>
          </div>
          <div className="mt-[-24px] flex justify-end">
            <IoIosCloseCircleOutline
              onClick={() => dispatch(uploadCloseImage())}
              size={24}
              className="text-[#7C7B7B]"
            />
          </div>

          <form className="mt-[40px]">
            <div className=" mt-[32px]">
              <div className="w-[80%] mx-auto">
                <div className="mt-[15px]  flex justify-center items-center">
                  <div className="cursor-pointer w-[100%]">
                    <Upload.Dragger
                      multiple={true}
                      listType="picture"
                      showUploadList={{ showRemoveIcon: true }}
                      accept=".png,.jpeg,.jpg"
                      fileList={fileList}
                      onChange={onChange}
                      beforeUpload={(file) => {
                        console.log(file.File);

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
                      <FiUpload size={20} className="text-[#d3afb4] mx-auto" />
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
            <div className="w-[341px] mx-auto smDesktop:mx-auto flex justify-between">
              <button className="border-[#1A1941] border-[1px] rounded-lg h-[50px] mt-[50px] px-[55px] text-[#1A1941] tracking-[10%] text-[16px] leading-5 font-extrabold">
                Cancel
              </button>
              <button onClick={handleSubmit} className="bg-[#1A1941] rounded-lg h-[50px] mt-[50px] px-[58px] text-[#FFFFFF] tracking-[10%] text-[16px] leading-5 font-extrabold">
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
