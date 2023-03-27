import React from 'react'
import {useQuery} from "@tanstack/react-query"
import axios from "axios";
import {baseURL} from "../../../../Redux/Api/api"
import { useSelector } from 'react-redux';


const useGetImages = (id) => {
  
    const API_URL = `${baseURL}/event/view/${id}/images`;

    const { token } = useSelector((state) => state.user);
  
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
  
    const getData = () => {
      return axios.get(API_URL, config).then((res) => res.data);

    };
  
  //  console.log(API_URL);
  
    const { data, isLoading, isError,error, refetch } = useQuery(["Im", id], getData, {
      enabled: !!id
    });
  
   
  
    return { data, isLoading, isError, error, refetch };
  };
  export default useGetImages;
  