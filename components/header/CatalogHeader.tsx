import { Box, Burger, Center, Header, MediaQuery, Button } from "@mantine/core";
import { Logo } from "../logo/Logo";
import { UserMenu} from "../userMenu/UserMenu";
import { ThemeToggle } from "../theme/ThemeToggle";
import { selectUserData } from "@/api/redux/slices/user";
import { useAppSelector } from "@/api/redux/hooks";
import Link from "next/link";

export const CatalogHeader = ({
  opened,
  toggle
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