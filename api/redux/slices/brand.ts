import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { HYDRATE } from "next-redux-wrapper";
import { ResponseBrand } from "@/api/catalogType";

export interface BrandList {
  data: ResponseBrand[] | null;
  dataadd:ResponseBrand | null;
}
const initialState: BrandList = {
  dataadd: null,
  data: null,
};
export const userSlice = createSlice({
  name: "brand",
  initialState,
  reducers: {
    setBrandListData: (state, action: PayloadAction<ResponseBrand[]>) => {
      state.data = action.payload;
    },
    setBrandAddData: (state, action: PayloadAction<ResponseBrand>) => {
      state.dataadd = action.payload;
    },
    deleteBrandData: (state, action: PayloadAction<null>) => {
      state.data = action.payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      state.data = action.payload.brand.data;
    },
  },
});
export const { setBrandListData, setBrandAddData, deleteBrandData } = userSlice.actions;
export const selectBrandListData = (state: RootState) => state.brand.data;
export const BrandList = userSlice.reducer;
