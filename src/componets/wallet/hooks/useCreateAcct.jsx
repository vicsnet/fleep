import React from 'react'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { baseURL } from '../../../Redux/Api/api'

const useCreateAcct = () => {
const API_URL = `${baseURL}/user/bank/create`
// const API_URL =`${baseURL}/user/bank/list`;
const {token} = useSelector((state)=>state.user);

const config ={
    headers:{

        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
    }
}


const AddAcct = (data) =>{
    const formdata = new FormData()
   
    formdata.append("bank_name", data.bank_name)
    formdata.append("account_number", data.account_number);
    formdata.append("account_name", data.account_name)

    console.log(data);
    return axios.post(API_URL,  data,  config);

}
 return useMutation(AddAcct)
}

export default useCreateAcct