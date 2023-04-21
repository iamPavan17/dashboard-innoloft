const initState = {
  isLoading: false,
};

function loaderReducer(state = initState, action) {
  switch (action.type) {
    case "SET_LOADER": {
      return {
        ...state,
        isLoading: action.payload,
      };
    }

    default:
      return state;
  }
}

export default loaderReducer;
