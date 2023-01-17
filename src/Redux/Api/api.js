import axios from "axios";

const API = axios.create({
  baseURL: "http://fleep.webhostingfree.io/public/api",
  timeout: 60000,

//   method: "post",
  headers: {
    "Content-Type": "application/json",
  },
});

export const registration = async (data) => await API.post("/user/register", data);
