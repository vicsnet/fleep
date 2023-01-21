import axios from "axios";
// import {baseURL} from "../../Api/api"

const API_URL = "http://fleep.webhostingfree.io/public/api/user/register";

const API_LOGIN = "http://fleep.webhostingfree.io/public/api/user/login";


// REgister User

const register = async (userData) => {
  const response = await axios.post(API_URL, userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  console.log(response.data);
};

// login
const login = async (userData) => {
  const response = await axios.post(API_LOGIN, userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

//logout
const logout = () =>{
  localStorage.removeItem('user')
}

const authService = {
  register,
  login,
  logout
};

export default authService;
