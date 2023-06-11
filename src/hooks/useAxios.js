import axios from "axios";

const useAxios = () => {
  const baseAxios = axios.create({
    baseURL: 'https://globe-lingual-server.vercel.app',
  });

  return [baseAxios];
};

export default useAxios;