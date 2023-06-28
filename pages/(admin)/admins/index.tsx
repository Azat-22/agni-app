import { AdminListTable } from "@/components/AdminList/AdminListTable";
import { AdminPageLayout } from "@/components/layout/AdminPageLayout";
import React, { FC, PropsWithChildren } from "react";

import { UserApi } from "@/api/axios";
import { wrapper } from "@/api/redux/store";
import {
  selectListData,
} from "@/api/redux/slices/adminusers";
import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";
import { setAdminListData } from "@/api/redux/slices/adminusers";
import { useAppSelector } from "@/api/redux/hooks";
import { setUserData } from "@/api/redux/slices/user";

const AdminsPage: FC<PropsWithChildren> = () => {
   const userListData = useAppSelector(selectListData);
   const filteredAdminListData = userListData?.filter((item) => item.role.name === "Администратор")
  return (
    <AdminPageLayout>
      <AdminListTable userListData={filteredAdminListData} />
    </AdminPageLayout>
  );
};
export default AdminsPage;

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async (ctx) => {
    try {
      const { loginToken } = parseCookies(ctx);
      const usersData = await UserApi.users(loginToken);
      const userMe = await UserApi.userMe(loginToken);
      store.dispatch(setAdminListData(usersData));
      store.dispatch(setUserData(userMe));
      return { props: {} };
    } catch (error) {
      console.log(error);
      return { props: {} };
    }
  });
