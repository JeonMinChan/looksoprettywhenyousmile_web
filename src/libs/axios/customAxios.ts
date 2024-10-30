import CONFIG from "@src/config/config.json";
import axios, { AxiosRequestConfig } from "axios";
// import requestInterceptor from "./requestInterceptor";
import ResponseHandler from "./responseInterceptor";
// import Token from "../token/token";
// import { REQUEST_TOKEN_KEY } from "@src/constants/token.constants";
const axiosRequestConfig: AxiosRequestConfig = {
  withCredentials: true,
  baseURL: CONFIG.server,
};

const dearAxios = axios.create(axiosRequestConfig);

// dearAxios.interceptors.request.use(requestInterceptor as any, (err) => Promise.reject(err));

dearAxios.interceptors.response.use((res) => res, ResponseHandler);

export default dearAxios;

// export const setAccessToken = (token: string) => {
//   dearAxios.defaults.headers[REQUEST_TOKEN_KEY] = `Bearer ${token}`;
// };
