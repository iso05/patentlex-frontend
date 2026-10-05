import axios from "axios";

let baseURL = (typeof process !== 'undefined' && process.env.NEXT_PUBLIC_API_URL) || "https://api.patentlex.uz";

if (baseURL.endsWith('/')) {
  baseURL = baseURL.slice(0, -1);
}

const api = axios.create({
  baseURL,
  withCredentials: true,
});

export default api;
