import axios from "axios"
import { baseURL } from "../../../Redux/Api/api"
import { useMutation } from "@tanstack/react-query"


const useForgotPassword = () => {
    const API_URL = `${baseURL}/user/password/reset/init`
    const config ={
        headers:{
            "Content-Type": "application/json",
           
        }
    }

    const forgotPwd = (data) =>{
        const formdata = new FormData();
        formdata.append("email", data.email)

        return axios.post(API_URL, data, config);
    }
    return useMutation(forgotPwd);
 
}

export default useForgotPassword