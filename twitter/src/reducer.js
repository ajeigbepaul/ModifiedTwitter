export const initialState = {
  user: null,
};
export const actionType = {
  SET_USER_LOGIN: "SET_USER_LOGIN",
  SET_USER_LOGOUT: "SET_USER_LOGOUT",
};
const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case actionType.SET_USER_LOGIN:
      return {
        ...state,
        user: action.user,
      };
    case actionType.SET_USER_LOGOUT:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

export default reducer;
