import axios from "axios";
let url = "https://restcountries.com/v2";
export const api = {
  getAll: async () => axios.get(`${url}/all`),
  getItem: async (title) => axios.get(`${url}/name/${title}`),
};
