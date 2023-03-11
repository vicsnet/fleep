import React from 'react'
import { useSelector } from 'react-redux';
import { baseURL } from '../../../Redux/Api/api';
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const useDeleteAcct = ({id}) => {
    const Delete_URL= `${baseURL}/user/bank/delete/${id}`

  

    const { token } = useSelector((state) => state.user);
  
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    };

    const deleteEvent =(data)=>{

      const formdata = new FormData();
      formdata.append("images_url", data.id);
      
      return axios.post(Delete_URL, data, config)
    }
  
  
  
  
  return useMutation( deleteEvent);
}

export default useDeleteAcct