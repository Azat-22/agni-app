import { AdminListTable } from "@/components/AdminList/AdminListTable";
import { AdminPageLayout } from "@/components/layout/AdminPageLayout";
import { data2 } from "@/data/adminList.data";
import React, { FC, PropsWithChildren } from "react";

const AdminsPage: FC<PropsWithChildren> = ({children}) => {
  return (
    <AdminPageLayout>
      <AdminListTable data={data2} />
      {children}
    </AdminPageLayout>
  );
};
export default AdminsPage;
