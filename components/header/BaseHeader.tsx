import { Header, Group, Button, Divider, Box, Navbar } from "@mantine/core";
import { Burger, Drawer, ScrollArea, rem } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import { Logo } from "../logo/Logo";
import { useState } from "react";


import { IconLogout } from "@tabler/icons-react";
import Link from "next/link";
import { UserMenu } from "../userMenu/UserMenu";
import { ThemeToggle } from "../theme/ThemeToggle";
import { datascroll } from "@/data/scroll.data";
import { useStyles } from "@/styles/base-header.style";
import { selectUserData } from "@/api/redux/slices/user";
import { useAppSelector } from "@/api/redux/hooks";

export const BaseHeader = () => {
  const [active] = useState("Billing");
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const { classes, theme, cx} = useStyles();
  const loginData = useAppSelector(selectUserData);
  return (
    <Box>
      <Header height={60} px="md">
        <Group position="apart" sx={{ height: "100%" }}>
          <Logo
            subtitle={"Кафедра Автоматизации и ИТ"}
            title={"АГНИ Автоматизация"}
          />
          <Group
            sx={{ height: "100%" }}
            spacing={0}
            className={classes.hiddenMobile}
          >
            <Link href="/" className={classes.link}>
              Главная
            </Link>
            <Link href="/department" className={classes.link}>
              Наша Кафедра
            </Link>
            <Link href="/news" className={classes.link}>
              Новости
            </Link>
            <Link href="https://agni-rt.ru/" className={classes.link}>
              Сайт АГНИ
            </Link>
            <Link href="/(admin)/dashboard" className={classes.link}>
              Панель управления
            </Link>
            <Link href="/catalog" className={classes.link}>
              Каталог
            </Link>
          </Group>
          <Group>
            <Group className={classes.hiddenMobile}>
              {loginData ? (
                <UserMenu />
              ) : (
                <Link href="/auth">
                  <Button fullWidth variant="outline">
                    Авторизация
                  </Button>
                </Link>
              )} 
            </Group>
            <Group>
              <Burger
                opened={drawerOpened}
                onClick={toggleDrawer}
                className={classes.hiddenDesktop}
              />
              <ThemeToggle />
            </Group>
          </Group>
        </Group>
      </Header>
      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="50%"
        padding="md"
        className={classes.hiddenDesktop}
        zIndex={1000000}
        title={"Кафедра Автоматизации и ИТ"}
      >
        <ScrollArea h={`calc(100vh - ${rem(60)})`}>
          <Divider
            my="sm"
            color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"}
          />
          <Group position="center" grow pb="xl">
            {loginData ? null : (
              <Link href="/auth/">
                <Button fullWidth variant="outline">
                  Авторизация
                </Button>
              </Link>
            )}
          </Group>
          {datascroll.map((item) => (
            <Link
              className={cx(classes.link, {
                [classes.linkActive]: item.label === active,
              })}
              href={item.link}
              key={item.label}
              onClick={() => toggleDrawer()}
            >
              <item.icon className={classes.linkIcon} stroke={1.5} />
              <span>{item.label}</span>
            </Link>
          ))}
          <Navbar.Section className={classes.footer}>
            <Link href="/" className={classes.link}>
              <IconLogout className={classes.linkIcon} stroke={1.5} />
              Выйти из аккаунта
            </Link>
          </Navbar.Section>
        </ScrollArea>
      </Drawer>
    </Box>
  );
};
