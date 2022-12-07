import React from 'react'

const UsersDelete = ({ showDelOption }) => {
    //  const showDelOption = () => {
    //    setDelOption(true);
    //  };
  return (
    <div>
      <button
        onClick={showDelOption}
        className="text-[16px] font-normal text-[#000000] py-[14px] px-[22.5px] absolute mt-[8px] ml-[-20px] bg-[#FFFFFF]"
        style={{ boxShadow: "0px 0px 10px 0px rgba(132, 132, 132, 0.15)" }}
      >
        Delete
      </button>
    </div>
  );
}

export default UsersDelete