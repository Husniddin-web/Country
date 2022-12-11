import axios from "axios";
let url = "https://restcountries.com/v2";
export const api = {
  getAll: async () => axios.get(`${url}/all`),
  getItem: async (title) => axios.get(`${url}/name/${title}`),
  getRegion: async (region) => axios.get(`${url}/region/${region}`),
  getName: async (text) => axios.get(`${url}/name/${text}`),
};
