import axios from "axios";

const getAPI = async (url) => {
  const result = await axios.get(url);
  console.log(url, ":", result);
  return result.data.data;
};
export default getAPI;

// const GetAPI = (url) => {
//   const [data, setData] = useState(null);
//   const [isPending, setIsPending] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     axios
//       .get(url)
//       .then((response) => {
//         let data = [...response.data.data];
//         return data;
//       })
//       .then((data) => {
//         setData(data);
//         setIsPending(false);
//         setError(null);
//       })
//       .catch((err) => {
//         setIsPending(false);
//         setError(err.message);
//       });
//   }, [url]);
//   return { data, isPending, error };
// };
