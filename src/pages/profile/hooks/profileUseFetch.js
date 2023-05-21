
import { useSelector } from "react-redux";
import { baseURL } from "../../../Redux/Api/api";
import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

const ProfileUseFetch = () => {


  const { token } = useSelector((state) => state.user);

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  const getData = () => {
    return Axios.get(`${baseURL}/user/profile`, config).then((res) => res.data);
  };

  const {data, isLoading, isFetching, error, isError, refetch } = useQuery(["profile"], getData, {
    cacheTime:5000,
  });

  // return (data, loading, error)
  return { data, isLoading, isFetching, error, isError, refetch };
};

export default ProfileUseFetch;
