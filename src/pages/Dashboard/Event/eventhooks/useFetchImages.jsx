import React from 'react'
import {useQuery} from "@tanstack/react-query"
import axios from "axios";
import {baseURL} from "../../../../Redux/Api/api"
import { useSelector } from 'react-redux';

// const useFetchEventImages = ({code}) => {
//    const API_URL = `${baseURL}/event/view/${code}/images`
 
//    const {token} = useSelector((state)=>state.user);

//    const config = {
//     headers:{
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//     }
//    }

//    const getData = ()=>{
//     return axios.get(API_URL, config).then((res)=>res.data);
//    }

//    const {data, isLoading, isError} = useQuery(["Imag"] , getData)

//    return {data, isLoading, isError};
// };

// export default useFetchEventImages;

const useFetchImages = (code) => {
    const API_URL = `${baseURL}/event/view/${code}/images`;

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
  
   
  
    const { data, isLoading, isError } = useQuery(["Im"], getData);
  
   
  
    return { data, isLoading, isError, Error };
  };
  export default useFetchImages;
  