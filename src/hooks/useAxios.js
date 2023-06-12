import axios from "axios";

const useAxios = () => {
  const baseAxios = axios.create({
    // baseURL: 'https://globe-lingual-server.vercel.app',
    baseURL: 'http://localhost:5000',
  });

  return [baseAxios];
};

export default useAxios;