
import { Home } from "@/components/home/Home";

import { RootLayout } from "@/components/layout/RootLayout";

import { HomeData } from "@/data/homedata";
import React, { FC, PropsWithChildren } from "react";

export const HomePage: FC<PropsWithChildren> = ({ children }) => {
  return (
    <RootLayout>
      <Home data={HomeData.data}
      />
      {children}
    </RootLayout>
  );
};
export default HomePage;
