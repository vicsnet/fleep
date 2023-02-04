import axios from "axios";
import { baseURL } from "../../Api/api";

// const baseURL = "http://fleep.webhostingfree.io/public/api";

const API_URL = `${baseURL}/user/register`;

const API_LOGIN = `${baseURL}/user/login`;


// REgister User

const register = async (userData) => {
  const response = await axios.post(API_URL, userData);

  // if (response.data) {
  //   localStorage.setItem("user", JSON.stringify(response.data));
  // }

  return response.data;
};

// login
const login = async (userData) => {
  const response = await axios.post(API_LOGIN, userData);

  // if (response.data) {
  //   localStorage.setItem("token", JSON.stringify(response.data));
  // }

  return response.data;
};

//logout
const logout = () =>{
  // localStorage.removeItem('user')
  localStorage.removeItem('token')
}

const authService = {
  register,
  login,
  logout
};

export default authService;
