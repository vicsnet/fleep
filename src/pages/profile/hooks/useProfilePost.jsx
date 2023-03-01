import React from 'react'
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { baseURL } from '../../../Redux/Api/api';
import { useSelector } from "react-redux";

const useProfilePost = () => {

    const API_URL = `${baseURL}/user/upload/profile/image`;

    const { token } = useSelector((state) => state.user);
  
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: "Bearer " + token,
      },
    };

    const uploadImage =(data)=>{
        const formdata = new FormData();
        formdata.append("image", data.image);

        return axios.post(API_URL, formdata, config);

    };
    return useMutation(uploadImage);
 
}

export default useProfilePost