import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./product.slice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
// ...
const store = configureStore({
   reducer: {
      productReducer: productReducer,
   },
});
export default store;

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
