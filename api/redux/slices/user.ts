import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ResponseUser } from "../../type";
import { RootState } from "../store";
import { HYDRATE } from "next-redux-wrapper";

export interface UserState {
  data: ResponseUser | null;
}

const initialState: UserState = {
  data: null,
};
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<ResponseUser>) => {
      state.data = action.payload;
    },
    logout: (state, action: PayloadAction<null>) => {
      state.data = action.payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      state.data = action.payload.user.data;
    },
  },
});

export const { setUserData, logout } = userSlice.actions;

export const selectUserData = (state: RootState) => state.user.data;
export const userAuth = userSlice.reducer;
