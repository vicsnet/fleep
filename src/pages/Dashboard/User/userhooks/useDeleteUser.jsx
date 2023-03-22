import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react'
import { useSelector } from 'react-redux';
import { baseURL } from '../../../../Redux/Api/api';

const useDeleteUser = (id) => {
    const {token} = useSelector((state)=>state.user);
    const Delete_URL= `${baseURL}/event/delete/user/from/${id}`
 
    const config = {
       headers:{
           "Content-Type": "application/json",
           Authorization: `Bearer ${token}`,
       }
    }
    const queryClient = useQueryClient();
 
    const deleteData = (data)=>{
       return axios.post(Delete_URL, data, config);
    }
    return useMutation(deleteData, {
       onSuccess:()=>{
          queryClient.invalidateQueries("Singleparticipant");
       }
     })
}

export default useDeleteUser


    // const DeleteUser = () =>{
    //   const Delete_URL= `${baseURL}/event/delete/user/from/${id}`
    // //  console.log(isEmail); 
    
    
    
    //   axios.post(Delete_URL, {email:isEmail}, config).then((res)=>{
    //     const data = res.data.status;
    //     if(data){
    //       toast.success("succesful")
    //       setDelOption(false)
    //     }
     
    //     else {
    //       const error = (data && data.message) || res.status;
    //       return Promise.reject(error);
    //   }
      
    //   })
    
    // }
    
    // const DeleteUser = () =>{