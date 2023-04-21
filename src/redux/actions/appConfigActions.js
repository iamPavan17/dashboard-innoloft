// Action creators

export const getAppConfig = () => {
  return {
    type: "GET_APP_CONFIG",
  };
};

export const getAppConfigSuccess = (payload) => {
  return {
    type: "GET_APP_CONFIG_SUCCESS",
    payload,
  };
};

export const getAppConfigFailed = (payload) => {
  return { type: "GET_APP_CONFIG_FAILED", payload };
};
