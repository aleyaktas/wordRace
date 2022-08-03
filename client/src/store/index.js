import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import authReducer from "./features/auth/authSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export const useAppDispatch = () => useDispatch();

export const useAppSelector = useSelector;

export default store;
