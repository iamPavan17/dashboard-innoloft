import { get } from "./axios.config";

const APP_ID = process.env.REACT_APP_ID || 1;

export const AppConfig = {
  get: () => get(`configuration/${APP_ID}`),
};
