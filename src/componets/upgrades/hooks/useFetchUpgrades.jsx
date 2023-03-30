import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { baseURL } from "../../../Redux/Api/api"


const useFetchUpgrades = () => {
    const API_URL = `${baseURL}/plan/list`

    const config ={
        headers:{
            "Content-Type": "application/json",

        }
    }
        const getUpgrades =()=>{
            return axios.get(API_URL, config).then((res)=> res.data)
        
        }
        const {data, isLoading, isError, error, refetch} = useQuery(["upgrades"], getUpgrades)
        
        return {data, isLoading, isError, error, refetch} 
    
}

export default useFetchUpgrades