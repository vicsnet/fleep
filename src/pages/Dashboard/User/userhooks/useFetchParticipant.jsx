import React from 'react'
import { useSelector } from 'react-redux'
import {useQuery} from "@tanstack/react-query"
import axios from "axios"
import { baseURL } from '../../../../Redux/Api/api'

const useFetchParticipant = () => {
 
    const API_URL =`${baseURL}/event/participants`;

    const {token} = useSelector((state) =>state.user)

    const config ={
        headers:{
            "Content-Type": "application/json",
            Authorization: `Bearer ${token} `
        }
    }

    const getParticipant= ()=>{
        return axios.get(API_URL, config).then((res) =>res.data)
    }
    const {data, isLoading, isError, error, refetch} = useQuery(["participant"], getParticipant, {
        cacheTime:5000,
    });
    return {data, isLoading, isError, error, refetch} ;
}

export default useFetchParticipant