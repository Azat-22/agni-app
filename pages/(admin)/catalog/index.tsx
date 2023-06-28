import { AdminPageLayout } from "@/components/layout/AdminPageLayout";
import React, { FC, PropsWithChildren } from "react";
import { UserApi } from "@/api/axios";
import { wrapper } from "@/api/redux/store";
import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";

import { setUserData } from "@/api/redux/slices/user";
import { BrandListTable } from "@/components/AdminList/Catalog/Brand/BrandTable";
import { setBrandListData } from "@/api/redux/slices/brand";
import { TypeListTable } from "@/components/AdminList/Catalog/Type/TypeTable";
import { setTypeListData } from "@/api/redux/slices/type";
import { SimpleGrid } from "@mantine/core";

const CatalogPage: FC<PropsWithChildren> = () => {
  return (
    <AdminPageLayout>
      <SimpleGrid
        cols={1}
        spacing={10}
        breakpoints={[
          { maxWidth: "xs", cols: 1, spacing: 10 },
          { maxWidth: "sm", cols: 1, spacing: 10 },
          { maxWidth: "md", cols: 1, spacing: 10 },
          { maxWidth: "lg", cols: 1, spacing: 10 },
        ]}
        style={{ marginTop: 20, marginLeft: 20, marginBottom: 20 }}
      > 
      <TypeListTable />
      <BrandListTable />
      </SimpleGrid>
     
    </AdminPageLayout>
  );
};
export default CatalogPage;

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async (ctx) => {
    try {
      const { loginToken } = parseCookies(ctx);
      const brandsData = await UserApi.brands(loginToken);
      const typesData = await UserApi.types(loginToken);
      const userMe = await UserApi.userMe(loginToken);
      store.dispatch(setBrandListData(brandsData));
      store.dispatch(setTypeListData(typesData));
      store.dispatch(setUserData(userMe));
      return { props: {} };
    } catch (error) {
      console.log(error);
      return { props: {} };
    }
  });
