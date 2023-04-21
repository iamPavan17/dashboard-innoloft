const initState = {};

function productReducer(state = initState, action) {
  switch (action.type) {
    case "GET_PRODUCT_DETAILS": {
      return { ...state };
    }

    default:
      return state;
  }
}

export default productReducer;
