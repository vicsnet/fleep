import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { baseURL } from '../../../../Redux/Api/api';

const useFetchEventByDate = (dataD) => {
    const API_URL = `${baseURL}/user/event/owned/date/${dataD}`;


    const { token } = useSelector((state) => state.user);
  
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
  
    const getData = () => {
      return axios.get(API_URL, config).then((res) => res.data);
    };
  
    const { data, isLoading, isError, error, refetch } = useQuery(
      ["EventByDate", dataD],
      getData,
      {
        enabled: !!dataD,
      }
    );
  
    return { data, isLoading, isError, error, refetch };
}

export default useFetchEventByDate