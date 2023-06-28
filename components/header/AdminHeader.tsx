import { Box, Burger, Button, Center, Header, MediaQuery } from "@mantine/core";
import { UserMenu } from "../userMenu/UserMenu";
import { ThemeToggle } from "../theme/ThemeToggle";
import { Logo } from "../logo/Logo";
import { selectUserData, setUserData } from "@/api/redux/slices/user";
import { useAppSelector } from "@/api/redux/hooks";
import Link from "next/link";
import { wrapper } from "@/api/redux/store";
import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";
import { setAdminListData } from "@/api/redux/slices/adminusers";
import { UserApi } from "@/api/axios";

 export const AdminHeader = ({
  opened,
  toggle,
}: {
  opened: boolean;
  toggle: () => void;
}) => {
  const userData = useAppSelector(selectUserData);
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
          {userData === null ? (
              <Link href="/auth/register">
              <Button fullWidth variant="outline">
                Авторизация
              </Button>
              </Link>
           
          ) : (
            <UserMenu />
          )}
          <ThemeToggle />
        </Box>
      </div>
    </Header>
  );
};