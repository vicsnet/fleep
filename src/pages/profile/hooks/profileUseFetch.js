import React, { useState } from "react";
import { useSelector } from "react-redux";
import { baseURL } from "../../../Redux/Api/api";
import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

const ProfileUseFetch = () => {
  //   const [loading, setLoading] = useState(false);
  //   const [error, setError] = useState(null);

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

  const {data, isLoading, error } = useQuery(["profile"], getData);

  // return (data, loading, error)
  return { data, isLoading, error };
};

export default ProfileUseFetch;
