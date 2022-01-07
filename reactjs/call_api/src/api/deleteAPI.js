import axios from "axios";

const deleteAPI = async (url) => {
  await axios.delete(url).then((res) => {
    console.log(res);
  });
};

export default deleteAPI;
