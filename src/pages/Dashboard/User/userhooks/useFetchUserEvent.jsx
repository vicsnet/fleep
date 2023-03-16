import React from 'react'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { baseURL } from '../../../../Redux/Api/api';

const useFetchUserEvent = (email) => {
    // {{base_url}}/api/user/event/participated/akinnuoyetolulope@gmail.com

     
    const API_URL = `${baseURL}/user/event/participated/${email}`;

    const {token} = useSelector((state) =>state.user)

    const config ={
        headers:{
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    }

    const getParticipant= async ()=>{
        return await axios.get(API_URL, config).then((res) =>res.data)
    }
    const {data, isLoading, isFetching, isError, error, } = useQuery(["eventUsersFetch"], getParticipant);
    return {data, isLoading, isError, error} ;

}

export default useFetchUserEvent