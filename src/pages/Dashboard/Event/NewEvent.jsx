import React, { useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { AiOutlineCalendar } from "react-icons/ai";
import { FiUpload } from "react-icons/fi";
import { useDropzone } from "react-dropzone";
import info from "../../../assets/Union (1).png";
import EventQR from "./EventQR";

import { useSelector, useDispatch } from "react-redux";
import {
  openEvent,
  closeEvent,
  createEvent,
} from "../../../Redux/features/createEventSlice";
import Arrow from "../../../assets/SVG/Arrow.svg";
const NewEvent = () => {
  const open = useSelector((state) => state.crtEvent.open);

  const dispatch = useDispatch();

  const [files, setFiles] = useState([]);
  const [showMonetize, setShowMonetize] = useState("");
  const [waterMark, setWaterMark] = useState([]);
  const [monetizehover, setMonetizeHover] = useState(false);
  
  const [event, setEvent] = useState({
    eventTitle: "",
    eventCategory:"",
    eventType:"",
    date:"",
    monitizePhoto: "",
    price: "",
    venue:"",
    eventBrandWatermark:[],
    eventCustomCoverPhoto:[],
  });

  const handleMonetizeChange = (e) => {
    const getValue = e.target.value;
    // console.log(getValue)
    setShowMonetize(getValue);
  };

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
    //   onDrop: (acceptedFiles) => {
    //       setWaterMark(
    //         acceptedFiles.map((files) =>
    //           Object.assign(files, {
    //             preview: URL.createObjectURL(files),
    //           })
    //         )
    //       );
    //   }
  });

  const images = waterMark.map((file) => (
    <div key={file.name}>
      <div>
        <img
          src={file.preview}
          alt="preiew"
          className="w-[250px] h-[250px] cover"
        />
      </div>
    </div>
  ));
  const imagesf = files.map((file) => (
    <div key={file.name}>
      <div>
        <img
          src={file.preview}
          alt="preiew"
          className="w-[250px] h-[250px] cover"
        />
      </div>
    </div>
  ));

  if (open) return null;
  return (
    <section
      className="fixed top-0 max-h-screen h-screen w-[100%] overflow-y-scroll scrollbar-thin scrollbar-thumb-[#19192E] scrollbar-track-gray-100 scrollbar-thumb-rounded-full scrollbar-track-rounded-full"
      style={{ background: "rgba(20, 24, 31, 0.25)" }}
    >
      <div
        className="w-[70%] rounded-lg mt-[79px] mx-auto  pb-[60px] mb-[60px]"
        style={{ background: "rgba(255, 255, 255, 1)" }}
      >
        <form>
          <div className="w-[90%] mx-auto">
            <div className="pt-[54px] flex justify-between">
              <h2 className="text-[24px] font-bold leading-7 text-[#1A1941]">
                Create Event
              </h2>
              <IoIosCloseCircleOutline
                onClick={() => dispatch(closeEvent())}
                size={24}
                className="text-[#7C7B7B] cursor-pointer"
              />
            </div>
            <p className="text-[#959595] text-[14px] font-normal mt-4 ">
              Fill the form to create an event
            </p>

            <form className="mt-[40px]">
              <div className="flex gap-[24px]">
                <div className="w-[50%]">
                  <label
                    htmlFor=""
                    className="text-[14px] leading-5 text-[#333333] font-normal"
                  >
                    Event Tittle
                  </label>
                  <br />
                  <input
                    type="text"
                    placeholder="Enter tittle of the event"
                    className="text-[14px] leading-4 font-light text-[#999999] outline-none rounded-lg bg-[#F9F9F9] h-[50px] pl-[20px] w-[100%]"
                    style={{ border: "1px solid rgba(229, 229, 229, 1)" }}
                    onChange={(e) => {setEvent({...event, eventTitle: e.target.value})}}
                  />
                </div>
                <div className="w-[50%]">
                  <label
                    htmlFor=""
                    className="text-[14px] leading-5 text-[#333333] font-normal"
                  >
                    Event Category
                  </label>
                  <br />
                  <div className="w-[100%] h-[50px] bg-[#F9F9F9] rounded-lg">
                    <select
                      name="category"
                      id=""
                      className="text-[14px] leading-4 font-light text-[#999999] outline-none rounded-lg bg-[#F9F9F9]  h-[50px] pl-[20px] w-[100%] "
                      style={{ border: "1px solid rgba(229, 229, 229, 1)" }}
                      onChange={(e) => {setEvent({...event, eventCategory: e.target.value})}}
                    >
                      <option value="">Select</option>
                      <option value="private">Private</option>
                      <option value="public">Public</option>
                      <option value="private$public">Private & Public</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="flex gap-[24px] mt-6">
                <div className="w-[50%]">
                  <label
                    htmlFor=""
                    className="text-[14px] leading-5 text-[#333333] font-normal"
                  >
                    Event Type
                  </label>
                  <br />
                  <div className="w-[100%] h-[50px] bg-[#F9F9F9] rounded-lg">
                    <select
                      name="event_type"
                      id="event_type"
                      className="text-[14px] leading-4 font-light text-[#999999] outline-none rounded-lg bg-[#F9F9F9]  h-[50px] pl-[20px] w-[100%] "
                      style={{ border: "1px solid rgba(229, 229, 229, 1)" }}
                      onChange={(e) => {setEvent({...event, eventType: e.target.value})}}
                    >
                      <option value="">Select</option>
                      <option value="private">Private</option>
                      <option value="public">Public</option>
                      <option value="private & public">Private & Public</option>
                    </select>
                  </div>
                </div>

                <div className="w-[50%]">
                  <label
                    htmlFor=""
                    className="text-[14px] leading-5 text-[#333333] font-normal"
                  >
                    Date
                  </label>
                  <br />
                  <div className="flex items-center bg-[#EDEDED] rounded-lg">
                    <div className="h-[50px]  w-[50px] flex items-center ">
                      <AiOutlineCalendar
                        size={16}
                        className="text-[#7C7B7B] mx-auto"
                      />
                    </div>
                    <input
                      type="date"
                      placeholder="Enter date of the event"
                      className="text-[14px] leading-4 font-light text-[#999999] outline-none rounded-r-lg bg-[#F9F9F9] h-[50px] pl-[20px] w-[100%] pr-5"
                      style={{ border: "1px solid rgba(229, 229, 229, 1)" }}
                      onChange={(e) => {setEvent({...event, date: e.target.value})}}
                    />
                  </div>
                </div>
              </div>
              <div className="w-[100%] flex gap-[26px] mt-6 flex-wrap relative shadow-lg">
                {monetizehover && (
                  <div
                    onMouseOver={() => setMonetizeHover(false)}
                    className="w-[200px] bg-white py-[6px] rounded-[2px] absolute right-[52%] top-[-46px]"
                  >
                    <p className="text-[10px] font-normal leading-[14.5px] w-[90%] mx-auto ">
                      If wish to monetize your photos Select the "Yes" option then
                      input the desired amount.
                    </p>
                    <img
                      src={Arrow}
                      alt=""
                      className="absolute bottom-[-6px] right-2 width-[20px]"
                    />
                  </div>
                )}
                <div className="w-[48%] smDesktop:w-[48%] smDesk:w-[47.7%] tabletAir:w-[47%] tablet:w-[47.4%]">
                  <label
                    htmlFor=""
                    className="text-[14px] leading-5 text-[#333333] font-normal flex justify-between items-center mb-[4px]"
                  >
                    Monetize Photos
                    <img
                      src={info}
                      alt="info"
                      onMouseOver={() => setMonetizeHover(true)}
                      className="w-[14px] h-[14px]"
                    />
                  </label>
                  {/* <br /> */}
                  <div className="w-[100%] h-[50px] bg-[#F9F9F9] rounded-lg">
                    <select
                      name="monetize"
                      id=""
                      className="text-[14px] leading-4 font-light text-[#999999] outline-none rounded-lg bg-[#F9F9F9]  h-[50px] pl-[20px] w-[100%]"
                      style={{ border: "1px solid rgba(229, 229, 229, 1)" }}
                      onChange={(e) => handleMonetizeChange(e)}
                    >
                      <option value="no">No</option>
                      <option value="yes">Yes</option>
                    </select>
                  </div>
                </div>
                {showMonetize === "yes" && (
                  <div className="w-[48%] smDesktop:w-[47.7%] tablet:w-[47%]">
                    <label
                      htmlFor=""
                      className="text-[14px] leading-5 text-[#333333] font-normal"
                    >
                      Price
                    </label>
                    <br />
                    <div className="flex items-center bg-[#EDEDED] rounded-lg">
                      <input
                        type="text"
                        placeholder="Enter Monetize Price"
                        className="text-[14px] leading-4 font-light text-[#999999] outline-none rounded-lg bg-[#F9F9F9] h-[50px] pl-[20px] w-[100%] pr-5"
                        style={{ border: "1px solid rgba(229, 229, 229, 1)" }}
                        onChange={(e) => {setEvent({...event, price: e.target.value})}}
                      />
                    </div>
                  </div>
                )}
                <div className="w-[48%] smDesktop:w-[47.7%] tablet:w-[47%]">
                  <label
                    htmlFor=""
                    className="text-[14px] leading-5 text-[#333333] font-normal"
                  >
                    Venue
                  </label>
                  <br />
                  <input
                    type="text"
                    placeholder="Enter the venue of the event"
                    className="text-[14px] leading-4 font-light text-[#999999] outline-none rounded-lg bg-[#F9F9F9] h-[50px] pl-[20px] w-[100%]"
                    style={{ border: "1px solid rgba(229, 229, 229, 1)" }}
                    onChange={(e) => {setEvent({...event, venue: e.target.value})}}
                  />
                </div>
              </div>

              {/*  input file*/}
              <div className="flex gap-[24px] mt-6">
                <div className="w-[50%]">
                  <label
                    htmlFor=""
                    className="text-[14px] leading-5 text-[#333333] font-normal"
                  >
                    Event Brand Watermark
                  </label>
                  <br />
                  <div
                    className="mt-[15px] h-[280px] rounded-lg border-dashed border-[1px] flex justify-center items-center"
                    {...getRootProps()}
                  >
                    <input {...getInputProps()} />
                    {imagesf.length === 0 ? (
                      <div className="cursor-pointer">
                        <FiUpload size={20} className="text-[#EE2339] mx-auto" />
                        <p className="text-[16px] font-normal leading-5 text-center text-[#8B8B8B] mt-[12px]">
                          Drag and drop files or click upload
                        </p>
                        <p className="text-[13px] font-normal leading-5 text-center text-[#8A8A8A] mt-[6px]">
                          250X250 px
                        </p>
                      </div>
                    ) : (
                      <>{imagesf}</>
                    )}
                  </div>
                </div>

                <div className="w-[50%]">
                  <label
                    htmlFor=""
                    className="text-[14px] leading-5 text-[#333333] font-normal"
                  >
                    Event Custom Cover Photo
                  </label>
                  <br />
                  <div
                    className="mt-[15px] h-[280px] rounded-lg border-dashed border-[1px] flex justify-center items-center"
                    {...getRootProps()}
                  >
                    <input {...getInputProps()} />

                    <div className="cursor-pointer">
                      <FiUpload size={20} className="text-[#EE2339] mx-auto" />
                      <p className="text-[16px] font-normal leading-5 text-center text-[#8B8B8B] mt-[12px]">
                        Drag and drop files or click upload
                      </p>

                      <>{images}</>
                    </div>
                  </div>
                </div>
              </div>

              {/* button */}
              <button className="bg-[#1A1941] rounded-lg h-[50px] mt-[50px] px-[40px] text-[#FFFFFF] tracking-[10%] text-[16px] leading-5" onClick={(e) => {
                e.preventDefault()
                dispatch(createEvent(event))
                localStorage.setItem("Event", JSON.stringify(event))
                console.log("Event Created")
              }}>
                Create Event
              </button>
            </form>
          </div>
        </form>

      </div>
      {/* <EventQR /> */}
    </section>
  );
};

export default NewEvent;
