import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { userAuth } from "./slices/user";
import {createWrapper} from 'next-redux-wrapper'
import { adminList } from "./slices/adminusers";
import { BrandList } from "./slices/brand";
import { TypeList } from "./slices/type";

export function makeStore() {
  return configureStore({
    reducer: {
      user: userAuth,
      list: adminList,
      brand: BrandList,
      type: TypeList,
    },
  });
}
export const store = makeStore();
export type RootStote = ReturnType<typeof makeStore>;
export type RootState = ReturnType<RootStote["getState"]>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export const wrapper = createWrapper<RootStote>(makeStore);