import axios from "axios";
import { useSelector } from "react-redux";
import { baseURL } from "../../Api/api";

const API_URL = `${baseURL}/user/event/create`;

const {token} = useSelector((state) =>state.user)
const config = {
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
};

const registerEvent = async (eventData) => {
  const response = await axios.post(API_URL, config, eventData);

  return response.data;
};

const createEventService = {
    registerEvent,
}
export default createEventService;
