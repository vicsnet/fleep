import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { baseURL } from '../../../Redux/Api/api';

const useAcctDelete = (id) => {
    const { token } = useSelector((state) => state.user);
    const Delete_URL= `${baseURL}/user/bank/delete/${id}`

    const queryClient = useQueryClient()
    
    
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      }

    }

      const deleteData = (data)=>{
return  axios.post(Delete_URL, data, config)
      }

      return useMutation(deleteData, {
        onSuccess:() =>{
            queryClient.invalidateQueries("Fetch_Acct")
          }
      })
    
}

export default useAcctDelete