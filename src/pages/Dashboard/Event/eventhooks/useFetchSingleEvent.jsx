import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { baseURL } from "../../../../Redux/Api/api";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const useFetchSingleEvent = (id) => {
  

  const SINGLE_URL =`${baseURL}/event/view/${id}`;
// const {id} = useParams();
  const { token } = useSelector((state) => state.user);

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };



  const getSingleEvent = () =>{
    return axios.get(SINGLE_URL, config).then((res)=> res.data);
  }


  const {data, isLoading, isError} = useQuery(["SINGLE_EVENT"], getSingleEvent)

  return {  isLoading, isError, data,  };
};
export default useFetchSingleEvent;
