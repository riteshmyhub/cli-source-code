export const GET_All_USERS = {
   REQUEST: "GET_All_USERS_REQUEST",
   SUCCESS: "GET_All_USERS_SUCCESS",
   FAIL: "GET_All_USERS_FAIL",
};

const userState = {
   loading: true,
   users: [],
};

export const userReducer = (state = userState, action) => {
   switch (action.type) {
      /** @GET_All_USERS */
      case GET_All_USERS.REQUEST:
         return {
            ...state,
            loading: true,
         };
      case GET_All_USERS.SUCCESS:
         return {
            ...state,
            loading: false,
            users: action?.payload?.users,
         };
      case GET_All_USERS.FAIL:
         return {
            ...state,
            loading: false,
            users: [],
         };
      default:
         return state;
   }
};
