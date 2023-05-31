import { GET_All_USERS } from "./user.reducers";

export default class UserService {
   _get_user() {
      return async (dispatch) => {
         try {
            dispatch({
               type: GET_All_USERS.REQUEST,
            });
            let res = await fetch("https://dummyjson.com/users", {
               method: "GET",
            });
            let data = await res.json();
            dispatch({
               type: GET_All_USERS.SUCCESS,
               payload: data,
            });
         } catch (error) {
            dispatch({
               type: GET_All_USERS.FAIL,
               payload: error,
            });
         }
      };
   }
}
