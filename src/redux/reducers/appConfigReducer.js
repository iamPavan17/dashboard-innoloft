const initState = {
  data: {},
  error: null,
};

function appConfigReducer(state = initState, action) {
  switch (action.type) {
    case "GET_APP_CONFIG_SUCCESS": {
      return {
        ...state,
        data: action.payload,
        error: null,
      };
    }

    case "GET_APP_CONFIG_FAILED": {
      return {
        ...state,
        data: {},
        error: action.payload,
      };
    }

    default:
      return state;
  }
}

export default appConfigReducer;
