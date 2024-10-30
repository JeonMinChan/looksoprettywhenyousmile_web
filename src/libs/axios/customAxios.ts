import CONFIG from "@src/config/config.json";
import axios, { AxiosRequestConfig } from "axios";
// import requestInterceptor from "./requestInterceptor";
// import ResponseHandler from "./responseInterceptor";
const axiosRequestConfig: AxiosRequestConfig = {
  baseURL: CONFIG.server,
};

const customAxios = axios.create(axiosRequestConfig);

export default customAxios;
