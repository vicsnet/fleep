
import { useSelector } from 'react-redux';
import { baseURL } from '../../../Redux/Api/api';
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useFetchAcct = () => {
  
    const API_URL =`${baseURL}/user/bank/list`;
    const { token } = useSelector((state) => state.user);
  
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
  
  
  
    const getAcct = () =>{
      return axios.get(API_URL, config).then((res)=> res.data);
    }
  
  
    const {data, isLoading, isError, isFetching} = useQuery(["Fetch_Acct"], getAcct);
    

  
  
  
    return { data, isLoading, isError, isFetching };
  
}

export default useFetchAcct