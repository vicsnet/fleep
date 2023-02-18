/** @format */

import React from "react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { baseURL } from "../../../../Redux/Api/api";
import { useSelector } from "react-redux";

const useFetchCreatePost = () => {
  const API_URL = `${baseURL}/user/event/create`;

  const { token } = useSelector((state) => state.user);

  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: "Bearer " + token,
    },
  };

  const registerNewEvent = ({ person }) => {
    const formdata = new FormData();
    formdata.append("status", person.status);
    formdata.append("title", person.title);
    formdata.append("monetize", person.monetize);
    formdata.append("amount", person.status);
    formdata.append("date", person.date);
    formdata.append("venue", person.venue);
    formdata.append("category_id", person.category_id);
    formdata.append("type_id", person.type_id);
    formdata.append("cover_photo", person.cover_photo);
    formdata.append("watermark", person.watermark);
    return axios.post(API_URL, formdata, config);
  };

  return useMutation(registerNewEvent);
};

export default useFetchCreatePost;
