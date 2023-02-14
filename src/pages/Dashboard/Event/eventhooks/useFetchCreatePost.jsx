import React from "react";
import {  useMutation} from "@tanstack/react-query";
import axios from "axios";
import { baseURL } from "../../../../Redux/Api/api";
import { useSelector } from "react-redux";

const useFetchCreatePost = () => {
  const API_URL = `${baseURL}/user/event/create`;

  const { token } = useSelector((state) => state.user);

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  };

  const registerNewEvent = (formData) => {
    return axios.post(API_URL, formData, config);
  };

  return useMutation(registerNewEvent);

};

export default useFetchCreatePost;
