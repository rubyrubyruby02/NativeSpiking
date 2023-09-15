import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://my-api.plantnet.org/v2/identify/",
  timeout: 1000,
  headers: {},
});

export const postImageName = (data) => {
  console.log(data);
  return axiosInstance
    .post(`hello`, data)
    .then((response) => {
      console.log(response);
      return response;
    })
    .catch((err) => {
      console.log(err);
    });
};
