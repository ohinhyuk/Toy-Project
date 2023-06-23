import axios from "axios";

export const getAllLanches = () => {
  const response = axios.get("https://api.spacexdata.com/v3/launches");

  return response;
};
