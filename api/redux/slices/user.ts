import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ResponseLogin, ResponseUser } from "../../type";
import { RootState } from "../store";

export interface UserState {
  data: ResponseUser | null;
  datalogin: ResponseLogin | null;
}

const initialState: UserState = {
  data: null,
  datalogin: null,
};
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<ResponseUser>) => {
      state.data = action.payload;
    },
    setLoginData: (state, action: PayloadAction<ResponseLogin>) => {
      state.datalogin = action.payload;
    },
    logoutData: (state, action: PayloadAction<null>) => {
      state.datalogin = action.payload;
    },
  },
});

export const { setUserData, logoutData, setLoginData} =
  userSlice.actions;

export const selectUserData = (state: RootState) => state.user.datalogin;
export const userAuth = userSlice.reducer;
