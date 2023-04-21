// Action creators

export const getProductDetails = () => {
  return {
    type: "GET_PRODUCT_DETAILS",
  };
};

export const getProductDetailsSuccess = (payload) => {
  return {
    type: "GET_PRODUCT_DETAILS_SUCCESS",
    payload,
  };
};

export const getProductDetailsFailed = (payload) => {
  return {
    type: "GET_PRODUCT_DETAILS_FAILED",
    payload,
  };
};
