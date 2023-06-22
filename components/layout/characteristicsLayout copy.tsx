import type { FC, ReactNode } from "react";
import { AppShell, useMantineTheme } from "@mantine/core";

import { useDisclosure } from "@mantine/hooks";

import { CatalogHeader } from "../header/CatalogHeader";


type СharacteristicsLayouType = {
  children?: ReactNode | ReactNode[];
};


export const СharacteristicsLayout: FC<СharacteristicsLayouType> = ({ children }) => {
  const [opened, { toggle }] = useDisclosure(false);
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
      header={<CatalogHeader opened={opened} toggle={toggle} />}
    >
      {children}
    </AppShell>
  );
};
