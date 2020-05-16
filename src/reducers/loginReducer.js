export default (state = {}, action) => {
  switch (action.type) {
    case "LOGIN_ACTION":
      return {
        result: action.payload,
      };
    case "LOGIN_SUCCESS":
      return {
        result: action.payload,
      };
    case "LOGIN_FAIL":
      return {
        result: action.payload,
      };
    default:
      return state;
  }
};
