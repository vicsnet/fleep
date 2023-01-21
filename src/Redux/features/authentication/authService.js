import axios from "axios";
// import {baseURL} from "../../Api/api"

const API_URL = "http://fleep.webhostingfree.io/public/api/user/register";





// Register User

const register = async (userData) => {
  const response = await axios.post(API_URL, userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  console.log(response.data);
};




// const login = () => {
//   d
// }

const authService = {
  register,
};

export default authService;
