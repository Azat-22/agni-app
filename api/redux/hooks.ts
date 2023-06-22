import { AppDispatch, RootState } from "./store";
import {useDispatch, TypedUseSelectorHook, useSelector} from 'react-redux'

export const useAppDispath = () => useDispatch<AppDispatch>()

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
