import axios from "axios"
import { baseURL } from "../../../Redux/Api/api"
import { useMutation } from "@tanstack/react-query"


const useResetPassword = () => {
    const API_URL = `${baseURL}/user/password/reset/final/teejtabor@gmail.com/8791`
    const config ={
        headers:{
            "Content-Type": "application/json",
           
        }
    }

    const forgotPwd = (data) =>{
        const formdata = new FormData();
        formdata.append("new_password", data.new_password)

        return axios.post(API_URL, data, config);
    }
    return useMutation(forgotPwd);
 
}

export default useResetPassword