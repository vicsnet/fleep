/** @format */

import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { baseURL } from "../../../../Redux/Api/api";
import { useSelector } from "react-redux";

const useUploadEventImages = (id) => {
  const API_URL = `${baseURL}/event/images/upload/${id}`;

  const { token } = useSelector((state) => state.user);
  const queryClient = useQueryClient()

  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: "Bearer " + token,
    },
  };

  const uploadImages = (data) => {
    const formdata = new FormData();
    data.images.forEach((image, i) => {
      formdata.append(`images[${i}]`, image);
    });

    return axios.post(API_URL, formdata, config);
  };

  return useMutation(uploadImages, {
    onSuccess:()=>{
      queryClient.invalidateQueries("Im")
    }
  });
};

export default useUploadEventImages;
