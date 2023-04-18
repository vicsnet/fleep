import axios from "axios"
import { baseURL } from "../../../Redux/Api/api"
import { useMutation } from "@tanstack/react-query"


const useResetPassword = (email) => {
    const API_URL = `${baseURL}/user/password/reset/final/${email}`
    const config ={
        headers:{
            "Content-Type": "application/json",
            
        }
    }

    const forgotPwd = (data) =>{
        const formdata = new FormData();
        formdata.append("new_password", data.new_password)
        formdata.append("generated_password", data.generated_password)

        return axios.post(API_URL, data, config);
    }
    return useMutation(forgotPwd);
}

export default useResetPassword