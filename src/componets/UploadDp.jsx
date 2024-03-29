import { useState, useEffect } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { FiUpload } from "react-icons/fi";
import { useDropzone } from "react-dropzone";
import { useSelector, useDispatch } from 'react-redux'
import { closeImage } from "../Redux/features/uploadDPSlice"; 
import useProfilePost from "../pages/profile/hooks/useProfilePost";
import { toast } from "react-toastify";
import ClipLoader from "react-spinners/ClipLoader";



const UploadDp = () => {
  const [files, setFiles] = useState([]);
  
    const open = useSelector((state) => state.uploadDp.open);
    const dispatch = useDispatch()
    const {mutate, isLoading, isError, error, isSuccess} = useProfilePost();
    

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
   
  });

 
  const images = files.map((file) => (
    <div key={file.name}>
      <div>
        <img
          src={file.preview}
          alt="preiew"
          className="w-[150px] h-[150px] cover"
        />
      </div>
    </div>
  ));
  const handleSubmit = (e) =>{
    e.preventDefault();
    const imUpload = files[0]
    mutate({image:imUpload});
  }
  useEffect(() => {
    if(isError){
      toast.error(error.response.data.message);
    }
    if(isSuccess){
      toast.success("Image Upload Successful");
      setFiles([]);
      dispatch(closeImage());
    }
  }, [isError, isSuccess])
  
console.log(files);
    if(open) return null
  return (
    <section
      className="fixed top-0 max-h-screen h-screen w-[100%] overflow-y-scroll scrollbar-thin scrollbar-thumb-[#19192E] scrollbar-track-gray-100 scrollbar-thumb-rounded-full scrollbar-track-rounded-full"
      style={{ background: "rgba(20, 24, 31, 0.25)" }}
    >
      <div
        className="w-[40%] smDesktop:w-[50%] smDesk:w-[55%] tabletAir:w-[60%] tablet:w-[65%] rounded-lg mt-[170px] mx-auto  pb-[60px] mb-[60px]"
        style={{ background: "rgba(255, 255, 255, 1)" }}
      >
        <div className="w-[90%] mx-auto">
          <div className="pt-[54px] flex gap-[8rem] justify-end">
            <h2 className="text-[24px] font-bold leading-7 text-[#1A1941]">
              Upload Image
            </h2>
            <IoIosCloseCircleOutline
              onClick={() => dispatch(closeImage())}
              size={24}
              className="text-[#7C7B7B]"
            />
          </div>

          <form className="mt-[40px]">
            {/*  input file*/}
            <div className=" mt-[32px]">
              <div className="w-[80%] mx-auto">
                <div
                  className="mt-[15px] h-[200px] rounded-lg border-dashed border-[1px] flex justify-center items-center"
                  {...getRootProps()}
                >
                  <input {...getInputProps()} />
                  {images.length === 0 ? (
                    <div className="cursor-pointer">
                      <FiUpload size={20} className="text-[#EE2339] mx-auto" />
                      <p className="text-[16px] font-normal leading-5 text-center text-[#8B8B8B] mt-[12px]">
                        Drag and drop files or click upload
                      </p>
                    </div>
                  ) : (
                    <>{images}</>
                  )}
                </div>
              </div>
            </div>

            {/* button */}
            <div onClick={()=>dispatch(closeImage())} className="w-[80%] mx-auto flex gap-[30px]">
              <button className="border-[#1A1941] border-[1px] rounded-lg h-[50px] mt-[50px] px-[55px] text-[#1A1941] tracking-[10%] text-[16px] leading-5 font-extrabold">
                Cancel
              </button>
              <button onClick={handleSubmit} className="bg-[#1A1941] rounded-lg h-[50px] mt-[50px] px-[58px] text-[#FFFFFF] tracking-[10%] text-[16px] leading-5 font-extrabold">
              {isLoading ?<ClipLoader color="#FFFFFF" /> :" Save"}
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* <EventQR /> */}
    </section>
  );
};

export default UploadDp;
