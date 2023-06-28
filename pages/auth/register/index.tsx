
import { RootLayout } from "@/components/layout/RootLayout";
import React, { FC, PropsWithChildren } from "react";
import { createStyles } from "@mantine/core";
import { AuthRegister } from "@/components/auth/AuthRegister";
const useStyles = createStyles(() => ({
  hero: {
    position: "relative",
    backgroundImage: 'url("/freepik2.png")',
    backgroundPosition: "center",
    backgroundSize: "100% 100% ",
  },
}));
const AuthPage: FC<PropsWithChildren> = ({ children }) => {
  const { classes } = useStyles();
  return (
    <div className={classes.hero}>
      <RootLayout>
        <AuthRegister/>
        {children}
      </RootLayout>
    </div>
  );
};
export default AuthPage;
