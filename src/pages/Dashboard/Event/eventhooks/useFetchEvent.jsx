import React from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { baseURL } from "../../../../Redux/Api/api";
import { useSelector } from "react-redux";

    // cacheTime:5000,
    // staleTime:30000,
    // refetchOnMount:true,
    // refetchOnWindowFocus:true,
    // refetchInterval:2000,
const useFetchEvent = (id, dataSort) => {
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

  // const getSingleEvent = () =>{
  //   return axios.get(SINGLE_URL, config).then((res)=> res.data);
  // }

  const { data, isLoading, isFetching, isError, error, refetch } = useQuery(["Event"], getData,
  {
 

  },
 
  
  );

  // const sortData =(value = "all")=>{
  //   setValue(value);
  // if(value === "all"){
  //   setDataSort(data?.data);
  // }
  // else if(value === "recent"){
  //   let recentData = data?.data?.sort((a,b)=>{
  //     return b.date - a.date;
  //   })
  //   setDataSort(recentData);
  // }
  // else {
  //   let olderData = data?.data?.sort((a,b)=>{
  //     return a.date - b.date;
  //   })
  //   setDataSort(olderData)
  // }
  // }

  // const {SingleData, isLoading, error} = useQuery(["SINGLE_EVENT"], getSingleEvent)

  return { data, isLoading, isError,  error, refetch };
};
export default useFetchEvent;
