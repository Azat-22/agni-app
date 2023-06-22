
import { AdminListTable } from "@/components/AdminList/AdminListTable";
import { AdminPageLayout } from "@/components/layout/AdminPageLayout";
import { data4 } from "@/data/studentList.data";

import React, { FC, PropsWithChildren } from "react";

const StudentsPage: FC<PropsWithChildren> = ({children}) => {
  return (
    <AdminPageLayout>
      <AdminListTable data={data4} />
      {children}
    </AdminPageLayout>
  );
};
export default StudentsPage;
