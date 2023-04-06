import { useSelector } from 'react-redux'
import {useQuery} from "@tanstack/react-query"
import axios from "axios"
import { baseURL } from '../../../../Redux/Api/api'

const useFetchSingleParticipant = (id) => {
    const API_URL =`${baseURL}/event/${id}/participants`;

    const {token} = useSelector((state) =>state.user)

    const config ={
        headers:{
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    }

    const getParticipant= ()=>{
        return axios.get(API_URL, config).then((res) =>res.data)
    }
    const {data, isLoading, isError, error, refetch, isFetching} = useQuery(["Singleparticipant", id], getParticipant, {
        refetchOnMount: true,
        enabled: !!id
       
    });
    return {data, isLoading, isError, error, refetch, isFetching};
}

export default useFetchSingleParticipant