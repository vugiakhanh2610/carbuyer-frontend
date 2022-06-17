import axios from "axios";
export const fetcher = (url) => axios.get(url).then((res) => res.data);

const endpoint = "http://localhost:8080";
export const fetchAPI = {
  getAll: (type, brandName = "") => `${endpoint}/${type}/${brandName}`,
  getById: (type, id) => `${endpoint}/${type}/${id}`,
};