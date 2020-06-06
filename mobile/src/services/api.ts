import axios from "axios";

const api = axios.create({
  baseURL: "http://procyon.simet:3333",
});

export default api;
