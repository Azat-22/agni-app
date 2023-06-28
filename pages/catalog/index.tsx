import { UserApi } from "@/api/axios";
import { setUserData } from "@/api/redux/slices/user";
import { wrapper } from "@/api/redux/store";
import { SearchCatalog } from "@/components/catalog/SeacrhCatalog";
import { CatalogLayout } from "@/components/layout/CatalogPanelLayout";
import { CatalogData } from "@/data/catalogdata";
import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";
import React, { FC, PropsWithChildren } from "react";
const CatalogPage: FC<PropsWithChildren> = ({ children }) => {
  return (
    <CatalogLayout>
      <SearchCatalog data={CatalogData}/>
      {children}
    </CatalogLayout>
  );
};
export default CatalogPage;

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async (ctx) => {
    try {
      const { loginToken } = parseCookies(ctx);
      const userData = await UserApi.userMe(loginToken);
      store.dispatch(setUserData(userData));
      console.log(userData);
      return { props: {} };
    } catch (error) {
      console.log(error);
      return { props: {} };
    }
  });