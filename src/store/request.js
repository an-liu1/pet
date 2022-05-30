import axios from "axios";
import Vue from "vue";

import { mainDomain } from "@/MainAPI.js";

axios.interceptors.request.use(
  (config) => {
    if (localStorage.getItem("Authorization")) {
      config.headers.Authorization = localStorage.getItem("Authorization");
    }
    config.headers["Content-Type"] = "application/json";
    config.timeout = 10 * 1000;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    if (response.data.code === 0) {
      return Promise.resolve(response.data);
    } else {
      return Promise.reject(response.data);
    }
  },
  (error) => {
    if (error && error.response) {
      Vue.prototype.$message({
        message: error.response.data,
        type: "error",
      });
      if (error.response.status == 401) {
        Vue.prototype.$message({
          message: "权限已过期，请重新登陆！",
          type: "error",
        });
        Vue.$router.push("/login");
        localStorage.clear();
        sessionStorage.clear();
      }
      return Promise.reject(error.response);
    }
    return Promise.reject(error);
  }
);

export default function request(method, address, data) {
  const url = `${mainDomain}${address}`;
  method = method.toLowerCase();
  if (method === "post") {
    return axios.post(url, data);
  } else if (method === "get") {
    return axios.get(url);
  } else if (method === "delete") {
    return axios.delete(url, data);
  } else if (method === "put") {
    return axios.put(url, data);
  }
}
