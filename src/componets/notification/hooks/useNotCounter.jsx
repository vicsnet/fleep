import axios from "axios"
import { baseURL } from "../../../Redux/Api/api"
import { useQuery } from "@tanstack/react-query"
import { useSelector } from "react-redux"

const useNotCounter = () => {
  
    const API_URL = `${baseURL}/notification/unread/counter`
    const {token} = useSelector((state) =>state.user)

    const config ={
       headers:{
           "Content-Type": "application/json",
           Authorization: `Bearer ${token} `
       }
   }
        const getNotification =()=>{
            return axios.get(API_URL, config).then((res)=> res.data)
        
        }
        const {data, isLoading, isError, error, refetch} = useQuery(["NotificationCounter"], getNotification)
        
        return {data, isLoading, isError, error, refetch} 
}

export default useNotCounter