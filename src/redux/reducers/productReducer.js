const initState = {
  data: {},
  error: null,
  updateSuccess: false,
  updateFailure: false,
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
        updateSuccess: true,
        updateFailure: false,
      };
    }
    case "UPDATE_PRODUCT_DETAILS_FAILED": {
      return {
        ...state,
        updateSuccess: false,
        updateFailure: true,
      };
    }
    case "RESET_ERROR": {
      return {
        ...state,
        error: null,
        updateSuccess: false,
        updateFailure: false,
      };
    }
    default:
      return state;
  }
}

export default productReducer;
