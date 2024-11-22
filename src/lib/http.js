import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost",
});

instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response.status === 401) {
      // update access token or something and re-run
      return instance.request(error.config);
    }

    return Promise.reject(error);
  },
);

export const http = instance;
