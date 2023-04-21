const initState = {
  data: {},
  error: null,
};

function productReducer(state = initState, action) {
  switch (action.type) {
    case "GET_PRODUCT_DETAILS_SUCCESS": {
      return {
        data: action.payload,
        error: null,
      };
    }

    case "GET_PRODUCT_DETAILS_FAILED": {
      return {
        data: {},
        error: action.payload,
      };
    }
    default:
      return state;
  }
}

export default productReducer;
