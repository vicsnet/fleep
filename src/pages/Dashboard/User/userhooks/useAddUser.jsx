import React from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { baseURL } from '../../../../Redux/Api/api';
import { useSelector } from 'react-redux';


const useAddUser = (id) => {
 const API_URL = `${baseURL}/event/add/user/to/${id}`

 const {token} = useSelector((state)=>state.user);

 const config = {
    headers:{
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
    }
 }
 const queryClient = useQueryClient();

 const AddUser = (data) =>{
    const formdata = new FormData();
    formdata.append("full_name", data.full_name);
    formdata.append("email", data.email);

    return axios.post(API_URL, data, config);
 }

 return useMutation(AddUser, {
   onSuccess:()=>{
      queryClient.invalidateQueries("Singleparticipant");
   }
 });
}

export default useAddUser;

