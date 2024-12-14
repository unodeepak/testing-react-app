import { useDispatch, useSelector, TypeUseSelectorHook } from "react-redux";
import { RootState, AppDispatch } from "../store.js";

export const useAppDispatch = () => useDispatch();
export const useAppSelector = (data) => useSelector(data);
