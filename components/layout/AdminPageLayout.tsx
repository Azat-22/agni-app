import type { FC, ReactNode } from "react";
import { AppShell, useMantineTheme } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { AdminNavbar } from "../navbar/AdminNavbar";

import { AdminHeader } from "../header/AdminHeader";


type AdminPageLayoutType = {
  children?: ReactNode | ReactNode[];
};

export const AdminPageLayout: FC<AdminPageLayoutType> = ({ children }) => {
  const [opened, { toggle, close}] = useDisclosure(false);
  const theme = useMantineTheme();
  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      navbar={<AdminNavbar opened={opened} close={close} />}
      header={<AdminHeader opened={opened} toggle={toggle} />}
    >
      {children}
    </AppShell>
  );
};
