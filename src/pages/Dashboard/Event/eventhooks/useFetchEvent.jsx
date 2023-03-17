import React from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { baseURL } from "../../../../Redux/Api/api";
import { useSelector } from "react-redux";


const useFetchEvent = (id) => {
  const API_URL = `${baseURL}/user/event/list`;

  const SINGLE_URL =`${baseURL}/event/view/${id}`;

  const { token } = useSelector((state) => state.user);

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
const queryClient = useQueryClient();

  const getData = () => {
    return axios.get(API_URL, config).then((res) => res.data);
  };

  const getSingleEvent = () =>{
    return axios.get(SINGLE_URL, config).then((res)=> res.data);
  }

  const { data, isLoading, isFetching, isError } = useQuery(["Event"], getData,
  {
    cacheTime:5000,
    staleTime:30000,
    refetchOnMount:true,
    refetchOnWindowFocus:true,
    // refetchInterval:2000,
  },
  // {
  //   // onError:
    
  // }
  
  );

  const {SingleData, Loading, Error} = useQuery(["SINGLE_EVENT"], getSingleEvent)

  return { data, isLoading, isError, SingleData, Loading, Error };
};
export default useFetchEvent;
