import { useMutation } from "@tanstack/react-query";
import { baseURL } from "../../../Redux/Api/api";
import { useSelector } from "react-redux";
import axios from "axios";


const useChangePass = () => {

    const API_URL = `${baseURL}/user/password/change`

  
  
//   const queryClient = useQueryClient();
  const { token } = useSelector((state) => state.user);

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  };


  // const queryClient = useQueryClient();
  
const changePass =  (data) =>{
  const formdata = new FormData();
  formdata.append("old_password", data.old_password);
  formdata.append("new_password", data.new_password);


  return axios.post(API_URL, data, config)

}


return useMutation( changePass);
}

export default useChangePass