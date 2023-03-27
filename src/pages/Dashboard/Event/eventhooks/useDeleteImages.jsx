import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { baseURL } from "../../../../Redux/Api/api";
import { useSelector } from "react-redux";

const useDeleteImages = ({id}) => {

    const Delete_URL= `${baseURL}/event/images/delete/${id}`

  
  

    const { token } = useSelector((state) => state.user);
  
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    };
  
    const queryClient = useQueryClient()
    
  const EditEvent =  (data) =>{
    const formdata = new FormData();
    formdata.append("images_url", data.images_url);
    
  
    return axios.post(Delete_URL, data, config)
  
  }
  
  return useMutation( EditEvent, {
    onSuccess:()=>{
      queryClient.invalidateQueries("Im")
    }
  });

}

export default useDeleteImages