
import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { baseURL } from '../../../Redux/Api/api'

const useCreateAcct = () => {
const API_URL = `${baseURL}/user/bank/create`;
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
const queryClient = useQueryClient();

 return useMutation(AddAcct,{
  onSuccess: ()=>{
    queryClient.invalidateQueries("Fetch_Acct")
  }
 });

}

export default useCreateAcct

// {
//   onMutate: async (newData) => {
//       await queryClient.cancelQueries("Fetch_Acct");

//       const prevEventData = queryClient.getQueryData("Fetch_Acct");
//       queryClient.setQueryData("Fetch_Acct", (oldQueryData) => {
//         return {
//           ...oldQueryData,
//           data: [
//             ...oldQueryData.data,
//             { id: oldQueryData?.data?.length + 1, ...newData },
//           ],
//         };
//       });
//       return prevEventData;
//     },
    
//     onError: (_error, _data, context) => {
//       queryClient.setQueryData("Fetch_Acct", context.prevEventData)
//     },
//     onSettled: () => {
//       queryClient.invalidateQueries("Fetch_Acct")
//     },
//   }