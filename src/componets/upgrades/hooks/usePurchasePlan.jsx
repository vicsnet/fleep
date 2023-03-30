import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { useSelector } from "react-redux"
import { baseURL } from "../../../Redux/Api/api"


const usePurchasePlan = (id) => {
    const API_URL = `${baseURL}/purchase/space/generate/checkout/${id}`
    const {token} = useSelector((state) =>state.user)

    const config ={
       headers:{
           "Content-Type": "application/json",
           Authorization: `Bearer ${token} `
       }
    }
        const getUpgrades =()=>{
            return axios.get(API_URL, config).then((res)=> res.data)
        
        }
        const {data, isLoading, isError, error, refetch, isSuccess} = useQuery(["upgradeD"], getUpgrades, {
            enabled: false
        })
        
        return {data, isLoading, isError, error, refetch} 
    
}

export default usePurchasePlan
