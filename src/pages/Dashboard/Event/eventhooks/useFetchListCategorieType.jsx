import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { baseURL } from "../../../../Redux/Api/api";
import { useSelector } from "react-redux";


const useFetchListCategorieType = () => {
  

  const eventCategory =`${baseURL}/eventcategory/list`;
  const { token } = useSelector((state) => state.user);

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };



  const getEventCategory = () =>{
    return axios.get(eventCategory, config).then((res)=> res.data);
  }


  const {data, isLoading, isError} = useQuery(["Event_Category"], getEventCategory);

  let categoryData = data;
  let categoryLoading = isLoading;
  let categoryError = isError;



  return {  categoryLoading, categoryError, categoryData };




};
export default useFetchListCategorieType;
