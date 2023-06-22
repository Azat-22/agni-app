import { FC, ReactNode } from "react";
import { BaseHeader } from "../header/BaseHeader";

type RootLayoutType = {
  children?: ReactNode | ReactNode[];
};

export const RootLayout: FC<RootLayoutType> = ({ children }) => {
  return (
    <main className="flex w-full min-h-screen flex-col">
      <BaseHeader />
      <section className="flex flex-1 w-full justify-center">
        {children}
      </section>
    </main>
  );
};
