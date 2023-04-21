import { get, put } from "./config";

export const Product = {
  get: () => get("product/6781"),
  update: (payload) => put("product/6781", payload),
};
