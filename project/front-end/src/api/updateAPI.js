import axios from "axios";

var axiosConfig = {
  headers: {
    // 'Content-Type': 'application/x-www-form-urlencoded',
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
};

const updateAPI = async (url, data) => {
  let rs = await axios.put(url, data, axiosConfig);
  return rs;
};
export default updateAPI;
