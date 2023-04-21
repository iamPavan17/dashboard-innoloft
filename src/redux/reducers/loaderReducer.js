const initState = {
  getProduct: false,
  updateProduct: false,
};

function loaderReducer(state = initState, action) {
  switch (action.type) {
    case "SET_LOADER": {
      return {
        ...state,
        ...action.payload,
      };
    }

    default:
      return state;
  }
}

export default loaderReducer;
