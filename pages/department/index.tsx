import { DepartmentMain } from "@/components/home/Department";
import { RootLayout } from "@/components/layout/RootLayout";
import React, { FC, PropsWithChildren } from "react";

const DepartmentPage: FC<PropsWithChildren> = ({ children }) => {
  return (
    <RootLayout>
      <DepartmentMain />
      {children}
    </RootLayout>
  );
};
export default DepartmentPage;
