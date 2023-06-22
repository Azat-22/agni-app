import {createStyles} from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  IconColor: {
    backgroundColor:
        theme.colorScheme === "dark"
            ? theme.colors.red[9]
            : theme.colors.green[5],
  },
  title: {
    color:
        theme.colorScheme === "dark" ? theme.colors.white : theme.colors.dark[9],
  },
}));