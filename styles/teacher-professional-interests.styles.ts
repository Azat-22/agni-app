import {createStyles} from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  icon1: {
    color:
      theme.colorScheme === "dark"
        ? theme.colors.red[9]
        : theme.colors.green[9],
  },
  title: {
    color:
      theme.colorScheme === "dark" ? theme.colors.white : theme.colors.dark[9],
  },
  name: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },
}));