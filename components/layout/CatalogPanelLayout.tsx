import type { FC, ReactNode } from "react";
import { AppShell, useMantineTheme } from "@mantine/core";

import { useDisclosure } from "@mantine/hooks";
import { CatalogNavbar } from "../navbar/CatalogNavbar";
import { CatalogHeader } from "../header/CatalogHeader";


type CatalogLayoutType = {
  children?: ReactNode | ReactNode[];
};

export const CatalogLayout: FC<CatalogLayoutType> = ({ children }) => {
  const [opened, { toggle, close }] = useDisclosure(false);
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
      navbar={<CatalogNavbar opened={opened} close={close} />}
      header={<CatalogHeader opened={opened} toggle={toggle} />}
    >
      {children}
    </AppShell>
  );
};
