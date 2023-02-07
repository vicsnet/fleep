import Axios from "axios";
import { useSelector } from "react-redux";
import { baseURL } from "../../../Redux/Api/api";
import { useQuery } from "@tanstack/react-query";

const Info = async () => {
  const { token } = useSelector((state) => state.user);

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  const { detail } = await Axios.get(`${baseURL}/user/profile`, config);

  //         .then(
  //     (res) => res.json()
  //   );

  return detail;
};

export default function GetProfile() {
  return useQuery(["profile"], Info);
}
