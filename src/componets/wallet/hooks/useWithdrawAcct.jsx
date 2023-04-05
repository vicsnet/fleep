import { useSelector } from "react-redux";
import { baseURL } from "../../../Redux/Api/api";
import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useWithdrawAcct = () => {
    const API_URL = `${baseURL}/withdrwal/request`;
const {token} = useSelector((state)=>state.user);

const config ={
    headers:{

        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
    }
}


const withdraw = (data) =>{
    const formdata = new FormData()
   
    formdata.append("bank_name", data.amount)
    formdata.append("account_number", data.bank_id);

    
    return axios.post(API_URL,  data,  config);

}
// const queryClient = useQueryClient();

 return useMutation(withdraw
//     ,{
//   onSuccess: ()=>{
//     queryClient.invalidateQueries("Fetch_Acct")
//   }
//  }
 );

}


export default useWithdrawAcct