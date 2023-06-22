
import { AdminListTable } from "@/components/AdminList/AdminListTable";
import { AdminPageLayout } from "@/components/layout/AdminPageLayout";
import { data3 } from "@/data/teacherList.data";
import React, { FC, PropsWithChildren } from "react";

const TeachersPage: FC<PropsWithChildren> = ({children}) => {
  return (
    <AdminPageLayout>
      <AdminListTable data={data3} />
      {children}
    </AdminPageLayout>
  );
};
export default TeachersPage;
