import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000",
});

instance.interceptors.request.use(
  (config) => {
    const token = JSON.parse(localStorage.getItem("FolioAuthAccessToken"));

    config.headers["Content-Type"] = "application/json; charset=utf-8";
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (res) => {
    console.log("axios.js response : ", res);
    return res;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default instance;
