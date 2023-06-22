import {createStyles} from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  icon: {
    color:
        theme.colorScheme === "dark"
            ? theme.colors.red[9]
            : theme.colors.green[9],
  },

  name: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },
}));