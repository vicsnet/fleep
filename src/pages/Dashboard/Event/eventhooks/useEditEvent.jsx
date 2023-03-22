/** @format */

import React from "react";
import { isError, useMutation } from "@tanstack/react-query";
import axios from "axios";
import { baseURL } from "../../../../Redux/Api/api";
import { useSelector } from "react-redux";

const useEditEvent = (id) => {
  const Edit_URL= `${baseURL}/user/event/edit/${id}`

  
  

  const { token } = useSelector((state) => state.user);

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  };


  // const queryClient = useQueryClient();
  
const EditEvent =  (data) =>{
  const formdata = new FormData();
  formdata.append("status", data.status);
  formdata.append("title", data.title);
  formdata.append("monetize", data.monetize);
  formdata.append("amount", data.amount);
  formdata.append("date", data.date);
  formdata.append("venue", data.venue);
  formdata.append("category_id", data.category_id);
  formdata.append("type_id", data.type_id);

  return axios.post(Edit_URL, data, config)

}


return useMutation( EditEvent);
};
export default useEditEvent;
