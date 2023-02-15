import React from "react";
import {  useMutation} from "@tanstack/react-query";
import axios from "axios";
import { baseURL } from "../../../../Redux/Api/api";
import { useSelector } from "react-redux";

const useUploadEventImages = (id) => {
 
    const API_URL = `${baseURL}/event/images/upload/${id}`;

    const { token } = useSelector((state) => state.user);
  
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    };
  
    const uploadImages = (formData) => {
      return axios.post(API_URL, formData, config);
    };
  
    return useMutation(uploadImages);

}

export default useUploadEventImages