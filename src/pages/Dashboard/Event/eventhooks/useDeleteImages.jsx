import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { baseURL } from "../../../../Redux/Api/api";
import { useSelector } from "react-redux";

const useDeleteImages = ({id}) => {

    const Delete_URL= `${baseURL}/event/images/delete/${id}`

  
  

    const { token } = useSelector((state) => state.user);
  
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: "Bearer " + token,
      },
    };
  
    
  const EditEvent =  (data) =>{
    const formdata = new FormData();
    formdata.append("images_url", data.images_url);
    
  
    return axios.post(Delete_URL, data, config)
  
  }
  
  // const {isLoading} = useMutation();
  
  // let Loading = isLoading;
  // let Error;
  return useMutation( EditEvent);

}

export default useDeleteImages