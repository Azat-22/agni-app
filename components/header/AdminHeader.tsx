import { Box, Burger, Center, Header, MediaQuery } from "@mantine/core";

import { UserMenu } from "../userMenu/UserMenu";
import { ThemeToggle } from "../theme/ThemeToggle";
import { Logo } from "../logo/Logo";



export const AdminHeader = ({
  opened,
  toggle,
}: {
  opened: boolean;
  toggle: () => void;
}) => {
  return (
    <Header height={{ base: 70, md: 80 }} p="md">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          height: "100%",
          justifyContent: "space-between",
        }}
      >
        <Logo
          subtitle={"Кафедра Автоматизации и ИТ"}
          title={"АГНИ Автоматизация"}
        />
        <Box className="flex items-center gap-3">
          <MediaQuery largerThan={"sm"} styles={{ display: "none" }}>
            <Center>
              <Burger opened={opened} onClick={toggle} />
            </Center>
          </MediaQuery>
          <UserMenu />
          <ThemeToggle />
        </Box>
      </div>
    </Header>
  );
};