import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ResponseUser, ResponseUserDelete } from "../../type";
import { RootState } from "../store";
import { HYDRATE } from "next-redux-wrapper";

export interface AdminList {
  data: ResponseUser[] | null;
  dataadd: ResponseUser | null;
}
const initialState: AdminList = {
  dataadd: null,
  data: null,
};
export const userSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    setAdminListData: (state, action: PayloadAction<ResponseUser[]>) => {
      state.data = action.payload;
    },
    setAddData: (state, action: PayloadAction<ResponseUser>) => {
      state.dataadd = action.payload;
    },
    deleteUserData: (state, action: PayloadAction<null>) => {
      state.data = action.payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      state.data = action.payload.list.data;
    },
  },
});
export const { setAdminListData, setAddData, deleteUserData } =
  userSlice.actions;
export const selectListData = (state: RootState) => state.list.data;
export const adminList = userSlice.reducer;
