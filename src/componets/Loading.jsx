
import {ThreeDots } from  'react-loader-spinner'

const Loading = () => {
  return (
    // <div
    //   className="fixed top-0 w-[100%] h-screen"
    //   style={{ background: "rgba(20, 24, 31, 0.25)" }}
    // >
        <div className="bg-[white] h-[300px] w-[300px] rounded-lg shadow-lg">

      <div className="mx-auto flex justify-center items-center mt-[40%] ">
      <ThreeDots 
height="80" 
width="80" 
radius="9"
color="#1A1941" 
ariaLabel="three-dots-loading"
wrapperStyle={{}}
wrapperClassName=""
visible={true}
 />
       
      </div>
        </div>
    // </div>
  );
};

export default Loading;
