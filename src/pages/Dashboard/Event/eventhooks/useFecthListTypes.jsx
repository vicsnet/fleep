import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { baseURL } from "../../../../Redux/Api/api";
import { useSelector } from "react-redux";


const useFetchListTypes = () => {
  

  const eventType =`${baseURL}/eventtype/list`;
  const { token } = useSelector((state) => state.user);

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };



  const getEventType = () =>{
    return axios.get(eventType, config).then((res)=> res.data);
  }


  const {data, isLoading, isError} = useQuery(["Event_Type"], getEventType);
  
  let typesData = data;
  let typesLoading = isLoading;
  let typesError = isError;



  return {  typesLoading, typesError, typesData };




};
export default useFetchListTypes;
