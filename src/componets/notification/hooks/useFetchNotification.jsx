import axios from "axios"
import { baseURL } from "../../../Redux/Api/api"
import { useQuery } from "@tanstack/react-query"
import { useSelector } from "react-redux"

const useFetchNotification = () => {
    const API_URL = `${baseURL}/notification/list`
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
        const {data, isLoading, isError, error, refetch} = useQuery(["Notification"], getNotification)
        
        return {data, isLoading, isError, error, refetch} 
}

export default useFetchNotification