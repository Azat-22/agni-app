import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { HYDRATE } from "next-redux-wrapper";
import { ResponseType } from "../../catalogType";

export interface TypeList {
  data: ResponseType[] | null;
  dataadd:ResponseType | null;
}
const initialState: TypeList = {
  dataadd: null,
  data: null,
};
export const userSlice = createSlice({
  name: "type",
  initialState,
  reducers: {
    setTypeListData: (state, action: PayloadAction<ResponseType[]>) => {
      state.data = action.payload;
    },
    setTypeAddData: (state, action: PayloadAction<ResponseType>) => {
      state.dataadd = action.payload;
    },
    deleteTypeData: (state, action: PayloadAction<null>) => {
      state.data = action.payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      state.data = action.payload.type.data;
    },
  },
});
export const { setTypeListData, setTypeAddData, deleteTypeData } = userSlice.actions;
export const selectTypeListData = (state: RootState) => state.type.data;
export const TypeList = userSlice.reducer;
