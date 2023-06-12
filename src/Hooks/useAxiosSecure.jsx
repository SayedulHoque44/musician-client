import axios from "axios";
import { useEffect } from "react";

//
export const myAxios = axios.create({
  baseURL: "https://musicians-server-sayedulhoque44.vercel.app/",
});

const axiosSecure = axios.create({
  baseURL: "https://musicians-server-sayedulhoque44.vercel.app/",
});

const useAxiosSecure = () => {
  useEffect(() => {
    // request
    axiosSecure.interceptors.request.use((req) => {
      const token = localStorage.getItem("access-token");
      if (token) {
        req.headers.Authorization = `Bearer ${token}`;
      }
      // console.log(req);
      return req;
    });
    //
    axiosSecure.interceptors.response.use(
      (response) => response,
      async (error) => {
        //
        if (error) {
          // console.log(error);
          console.log("logout korbo kintu !!");
        }
        return Promise.reject(error);
      }
    );
    //
  }, []);
  return [axiosSecure];
};

export default useAxiosSecure;
