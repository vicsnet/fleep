import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { baseURL } from '../../../../Redux/Api/api'

const useFetchHistory = () => {
 const API_URL = `${baseURL}/purchase/history`

 const {token} = useSelector((state) =>state.user)

 const config ={
    headers:{
        "Content-Type": "application/json",
        Authorization: `Bearer ${token} `
    }
}
const getHistory =()=>{
    return axios.get(API_URL, config).then((res)=> res.data)

}
const {data, isLoading, isError, error, refetch} = useQuery(["Purchase_History"], getHistory, {
    refetchOnWindowFocus: true,
} )

return {data, isLoading, isError, error, refetch} 
}

export default useFetchHistory