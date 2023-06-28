import { useAppDispath, useAppSelector } from "@/api/redux/hooks";
import { logout, selectUserData } from "@/api/redux/slices/user";
import { useMantineTheme, ActionIcon, MediaQuery, Button} from "@mantine/core";
import { Menu, Group, Text, Avatar } from "@mantine/core";
import { IconLogout, IconHeart, IconStar } from "@tabler/icons-react";
import { IconSettings, IconTrash } from "@tabler/icons-react";
import { IconPlayerPause, IconChevronDown } from "@tabler/icons-react";
import { IconMessage, IconSwitchHorizontal } from "@tabler/icons-react";
import Link from "next/link";
import { destroyCookie, parseCookies } from "nookies";
import { useRouter } from "next/router";


export const UserMenu = () => {
  const theme = useMantineTheme();
  const dispatch = useAppDispath();
  const router = useRouter();
  const userData = useAppSelector(selectUserData);
  function logoutOnClick() {
    const cookies = parseCookies();
    console.log({ ...cookies });
      destroyCookie(null, "loginToken");
      dispatch(logout(null));
      router.push("/");
  }

  return (
    <MediaQuery smallerThan={"sm"} styles={{ display: "none" }}>
      <Group position="center">
        <Menu
          withArrow
          width={300}
          position="bottom"
          transitionProps={{ transition: "pop" }}
          withinPortal
        >
          <Menu.Target>
            <ActionIcon className="flex items-center w-full px-4 py-7">
              <Group>
                
                <Avatar
                  radius="xl"
                  src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80"
                />

                <div className="flex gap-1">
                  <Text fz="xs" c="blue">
                    {userData?.profile.firstName}
                  </Text>
                  <Text fz="xs" c="blue">
                    {userData?.profile.lastName}
                  </Text>
                  <Text fz="xs" c="blue">
                    {userData?.profile.patronymic}
                  </Text>
                </div>
                <IconChevronDown className="h-5 w-5" />
              </Group>
            </ActionIcon>
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Item
              icon={
                <IconHeart
                  size="0.9rem"
                  stroke={1.5}
                  color={theme.colors.red[6]}
                />
              }
            >
              <Link href="/profile"> Мой Профиль</Link>
            </Menu.Item>
            <Menu.Item
              icon={
                <IconStar
                  size="0.9rem"
                  stroke={1.5}
                  color={theme.colors.yellow[6]}
                />
              }
            >
              Мои посты
            </Menu.Item>
            <Menu.Item
              icon={
                <IconMessage
                  size="0.9rem"
                  stroke={1.5}
                  color={theme.colors.blue[6]}
                />
              }
            >
              Мои комментарии
            </Menu.Item>

            <Menu.Label>Settings</Menu.Label>
            <Menu.Item icon={<IconSettings size="0.9rem" stroke={1.5} />}>
              Настройки аккаунта
            </Menu.Item>
            
            <Menu.Item icon={<IconLogout size="0.9rem" stroke={1.5} />} onClick={logoutOnClick}>
               Выйти
            </Menu.Item>

            <Menu.Divider />

            <Menu.Label>Danger zone</Menu.Label>
            
            <Menu.Item
              color="red"
              icon={<IconTrash size="0.9rem" stroke={1.5} />}
            >
              Удалить аккаунт
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </Group>
    </MediaQuery>
  );
};
