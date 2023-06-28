
import { UserApi } from "@/api/axios";
import { setAdminListData } from "@/api/redux/slices/adminusers";
import { setUserData } from "@/api/redux/slices/user";
import { wrapper } from "@/api/redux/store";
import { AdminDashboardStats, StatsRingProps } from "@/components/AdminList/AdminDashboardStats";
import { AdminPageLayout } from "@/components/layout/AdminPageLayout";
import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";
import React, { FC, PropsWithChildren } from "react";

const statsData: StatsRingProps = {
  data: [
    {
      label: "Количество зарегистрированных пользователей",
      stats: "20",
      progress: 20,
      color: "red",
      icon: "up",
    },
    
  ],
};

const DashboardPage: FC<PropsWithChildren> = ({children}) => {
  return (
    <AdminPageLayout> 
      <AdminDashboardStats data={statsData.data}/>   
      {children}
    </AdminPageLayout>
  );
};
export default DashboardPage;
export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async (ctx) => {
    try {
      const { loginToken } = parseCookies(ctx);
      const userData = await UserApi.userMe(loginToken);
      store.dispatch(setUserData(userData));
      return { props: {} };
    } catch (error) {
      console.log(error);
      return { props: {} };
    }
  });