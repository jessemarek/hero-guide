import axios from "axios";

export const axiosWithAuth = () => {
  return axios.create({
    baseURL: process.env.REACT_APP_API_URI,
  });
};
