import { useSelector } from "react-redux";
import { baseURL } from "../../../Redux/Api/api";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";


const useWalletTransaction = () => {
    const API_URL =`${baseURL}/withdrwal/history`;
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
  
  
    const {data, isLoading, isError, isFetching, error} = useQuery(["walletTransaction"], getAcct);
    

  
  
  
    return { data, isLoading, isError, isFetching, error };
}

export default useWalletTransaction