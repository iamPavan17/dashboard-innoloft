const initState = {
  data: {},
  error: null,
};

function productReducer(state = initState, action) {
  switch (action.type) {
    case "GET_PRODUCT_DETAILS_SUCCESS": {
      return {
        ...state,
        data: action.payload,
        error: null,
      };
    }
    case "GET_PRODUCT_DETAILS_FAILED": {
      return {
        ...state,
        data: {},
        error: action.payload,
      };
    }
    case "UPDATE_PRODUCT_DETAILS_SUCCESS": {
      return {
        ...state,
        error: null,
      };
    }
    case "UPDATE_PRODUCT_DETAILS_FAILED": {
      return {
        ...state,
        error: action.payload,
      };
    }
    case "RESET_ERROR": {
      return {
        ...state,
        error: null,
      };
    }
    default:
      return state;
  }
}

export default productReducer;
