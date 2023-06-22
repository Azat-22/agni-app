import { MediaQuery, Navbar } from "@mantine/core";
import { useState } from "react";
import { IconLogout, IconSwitchHorizontal } from "@tabler/icons-react";
import Link from "next/link";
import { data } from "@/data/admin-navbar.data";
import { useStyles } from "@/styles/admin-navbar.styles";

export const AdminNavbar = ({
  opened,
  close,
}: {
  opened: boolean;
  close: () => void;
}) => {
  const [active, setActive] = useState("Billing");
  const { classes, cx } = useStyles();
  const links = data.map((item) => (
    <Link
      className={cx(classes.link, {
        [classes.linkActive]: item.label === active,
      })}
      href={item.link}
      key={item.label}
      onClick={() => {
        setActive(item.label);
        close();
      }}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </Link>
  ));

  return (
    <MediaQuery
      smallerThan="sm"
      styles={!opened ? { display: "none" } : { display: "block" }}
    >
      <Navbar width={{ sm: 300 }} p="md">
        <Navbar.Section grow>{links}</Navbar.Section>

        <Navbar.Section className={classes.footer}>
          <Link href="/" className={classes.link}>
            <IconSwitchHorizontal className={classes.linkIcon} stroke={1.5} />
            Вернуться на главную
          </Link>

          <Link href="/" className={classes.link}>
            <IconLogout className={classes.linkIcon} stroke={1.5} />
            Выйти из аккаунта
          </Link>
        </Navbar.Section>
      </Navbar>
    </MediaQuery>
  );
};
