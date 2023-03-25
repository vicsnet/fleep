import React from 'react'
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
    const {data, isLoading, isError, error, refetch, } = useQuery(["Singleparticipant"], getParticipant, {
        refetchOnMount: true,
        enabled: true
       
    });
    return {data, isLoading, isError, error, refetch,};
}

export default useFetchSingleParticipant