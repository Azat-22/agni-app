import { UserApi } from "@/api/axios";
import { setUserData } from "@/api/redux/slices/user";
import { wrapper } from "@/api/redux/store";
import { CharacteristicsProfile } from "@/components/catalog/CharacteristicsProfil";
import { СharacteristicsLayout } from "@/components/layout/characteristicsLayout copy";
import { characteristicsData } from "@/data/characteristicsProfile.data";
import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";
import React, { FC, PropsWithChildren } from "react";
const CharacteristicsPage: FC<PropsWithChildren> = ({ children }) => {
  return (
    <СharacteristicsLayout>
      <CharacteristicsProfile data={characteristicsData} />
      {children}
    </СharacteristicsLayout>
  );
};
export default CharacteristicsPage;

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