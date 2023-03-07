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
            Authorization: `Bearer ${token}`
        }
    }

    const getParticipant= ()=>{
        return axios.get(API_URL, config).then((res) =>res.data)
    }
    const {data, isLoading, isError} = useQuery(["participant"], getParticipant);
    return {data, isLoading, isError} ;
}

export default useFetchParticipant