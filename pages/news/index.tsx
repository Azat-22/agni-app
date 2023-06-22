import { News } from "@/components/home/News";
import { RootLayout } from "@/components/layout/RootLayout";
import React, { FC, PropsWithChildren } from "react";

const DepartmentPage: FC<PropsWithChildren> = ({ children }) => {
  return (
    <RootLayout>
      <News />
      {children}
    </RootLayout>
  );
};
export default DepartmentPage;
