import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { baseURL } from "../../../../Redux/Api/api";
import { useSelector } from "react-redux";


const useFetchSingleEvent = (id) => {
  

  const SINGLE_URL =`${baseURL}/event/view/${id}`;

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


  const {data, isLoading,error, refetch, isError} = useQuery(["SINGLE_EVENT", id], getSingleEvent,{
    enabled: !!id,
    refetchOnWindowFocus: true,
  })

  return {  isLoading, isError, data, error, refetch };
};
export default useFetchSingleEvent;
