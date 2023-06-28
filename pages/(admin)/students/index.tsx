
import { UserApi } from "@/api/axios";
import { useAppSelector } from "@/api/redux/hooks";
import { selectListData, setAdminListData } from "@/api/redux/slices/adminusers";
import { setUserData } from "@/api/redux/slices/user";
import { wrapper } from "@/api/redux/store";
import { AdminListTable } from "@/components/AdminList/AdminListTable";
import { AdminPageLayout } from "@/components/layout/AdminPageLayout";
import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";

import React, { FC, PropsWithChildren } from "react";

const StudentsPage: FC<PropsWithChildren> = () => {
   const userListData = useAppSelector(selectListData);
   const filteredStudentListData = userListData?.filter(
     (item) => item.role.name === "Студент"
   );
  return (
    <AdminPageLayout>
      <AdminListTable userListData={filteredStudentListData} />
    </AdminPageLayout>
  );
};
export default StudentsPage;

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