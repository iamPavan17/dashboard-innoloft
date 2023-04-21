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

export const updateProductDetails = (payload) => {
  return {
    type: "UPDATE_PRODUCT_DETAILS",
    payload,
  };
};

export const updateProductDetailsSuccess = (payload) => {
  return {
    type: "UPDATE_PRODUCT_DETAILS_SUCCESS",
    payload,
  };
};

export const updateProductDetailsFailed = (payload) => {
  return {
    type: "UPDATE_PRODUCT_DETAILS_FAILED",
    payload,
  };
};
