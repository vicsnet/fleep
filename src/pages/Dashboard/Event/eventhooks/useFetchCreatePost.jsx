/** @format */

import React from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { baseURL } from "../../../../Redux/Api/api";
import { useSelector } from "react-redux";

const useFetchCreatePost = (id) => {
  const API_URL = `${baseURL}/user/event/create`;
  const Edit_URL = `${baseURL}/api/user/event/edit/${id}`;

  const { token } = useSelector((state) => state.user);

  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: "Bearer " + token,
    },
  };

  const queryClient = useQueryClient();

  const registerNewEvent = (data) => {
    const formdata = new FormData();
    formdata.append("status", data.status);
    formdata.append("title", data.title);
    formdata.append("monetize", data.monetize);
    formdata.append("amount", data.amount);
    formdata.append("date", data.date);
    formdata.append("venue", data.venue);
    formdata.append("category_id", data.category_id);
    formdata.append("type_id", data.type_id);
    formdata.append("cover_photo", data.cover_photo);
    formdata.append("watermark", data.watermark);

    return axios.post(API_URL, data, config)

  };

  return useMutation(registerNewEvent, {
    // onSuccess:(data)=>{
    //   // queryClient.invalidateQueries("Event")
    //   queryClient.setQueryData("Event", (oldQueryData)=>{
    //     return{
    //       ...oldQueryData, data:[...oldQueryData.data, data.data]
    //     }
    //   })

    // }
    onMutate: async (newData) => {
      await queryClient.cancelQueries("Event");
      const prevEventData = queryClient.getQueryData("Event");
      queryClient.setQueryData("Event", (oldQueryData) => {
        return {
          ...oldQueryData,
          data: [
            ...oldQueryData.data,
            { id: oldQueryData?.data?.length + 1, ...newData },
          ],
        };
      });
      return prevEventData;
    },
    onError: (_error, _data, context) => {
      queryClient.setQueryData("Event", context.prevEventData)
    },
    onSettled: () => {
      queryClient.invalidateQueries("Event")
    },
  });

};
export default useFetchCreatePost;
