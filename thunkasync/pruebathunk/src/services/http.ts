import axios from "axios";

export const API_URL = "https://rickandmortyapi.com/api";

export const http = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-type": "application/json",
  },
});
