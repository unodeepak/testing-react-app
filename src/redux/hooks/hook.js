import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux'
import { RootState, AppDispatch } from '../store'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch(); // Dispatch function
export const useAppSelector = (selector) => useSelector(selector); // Selector function
