import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { baseURL } from "../../../../Redux/Api/api";
import { useSelector } from "react-redux";

const useFetchEvent = (id) => {
  const API_URL = `${baseURL}/user/event/list`;

  // const SINGLE_URL = `${baseURL}/event/view/${id}`;

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
    ["Event"],
    getData,
    {}
  );

  return { data, isLoading, isError, error, refetch };
};
export default useFetchEvent;
