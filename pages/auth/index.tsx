import { Auth } from "@/components/auth/AuthForm";
import { RootLayout } from "@/components/layout/RootLayout";
import React, { FC, PropsWithChildren } from "react";
import { createStyles } from "@mantine/core";
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
      <Auth />
      {children}
    </RootLayout>
    </div>
  );
};
export default AuthPage;
