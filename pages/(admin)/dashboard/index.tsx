
import { AdminDashboardStats, StatsRingProps } from "@/components/AdminList/AdminDashboardStats";
import { AdminPageLayout } from "@/components/layout/AdminPageLayout";
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
