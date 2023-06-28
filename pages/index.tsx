import { UserApi } from "@/api/axios";
import { setUserData} from "@/api/redux/slices/user";
import { wrapper } from "@/api/redux/store";
import { Home } from "@/components/home/Home";
import { RootLayout } from "@/components/layout/RootLayout";

import { HomeData } from "@/data/homedata";
import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";
import React, { FC, PropsWithChildren } from "react";


export const HomePage: FC<PropsWithChildren> = ({ children }) => {
  return (
    <RootLayout>
      <Home data={HomeData.data} />
      {children}
    </RootLayout>
  );
};
export default HomePage;

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async (ctx) => {
    try {
      const { loginToken } = parseCookies(ctx);
      const userData = await UserApi.userMe(loginToken);
      store.dispatch(setUserData(userData));
      console.log(userData)
      return { props: {} };
    } catch (error) {
      console.log(error);
      return { props: {} };
    }
  });
