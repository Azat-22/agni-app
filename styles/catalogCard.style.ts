import { createStyles, rem } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
  },

  section: {
    borderBottom: `${rem(2)} solid ${
      theme.colorScheme === "dark" ? theme.colors.blue[9] : theme.colors.gray[3]
    }`,
    paddingLeft: theme.spacing.sm,
    paddingRight: theme.spacing.sm,
    paddingBottom: theme.spacing.sm,
  },
  line: {
    borderBottom: `${rem(2)} solid ${
      theme.colorScheme === "dark" ? theme.colors.blue[9] : theme.colors.gray[3]
    }`,
  },

  like: {
    color: theme.colors.red[6],
  },

  label: {
    textTransform: "uppercase",
    fontSize: theme.fontSizes.xs,
    fontWeight: 700,
    pointerEvents: "none",
  },
  
  rating: {
    position: "absolute",
    top: theme.spacing.xs,
    right: rem(12),
    pointerEvents: "none",
  },
}));
