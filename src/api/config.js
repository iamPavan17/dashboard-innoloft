import axios from "axios";
const BASE_URL = "https://api-test.innoloft.com/";

const defaultInstance = axios.create({
  baseURL: `${BASE_URL}`,
});

export function get(url) {
  return defaultInstance
    .get(url)
    .then((response) => response)
    .catch((error) => {
      throw error.response;
    });
}

export function put(url, payload) {
  return defaultInstance
    .put(url, payload)
    .then((response) => response)
    .catch((error) => {
      throw error.response;
    });
}
