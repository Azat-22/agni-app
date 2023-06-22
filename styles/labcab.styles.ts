import { createStyles, rem} from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: rem(10),
    paddingBottom: rem(50),
  },

  item: {
    display: "flex",
  },
slide:{
   width: rem(700),
   height: rem(520),
},
  Image: {
    width: rem(120),
    height: rem(120),
    borderRadius: "20%",
  },
  ButtonImage: {
    padding: rem(0),
    marginRight: theme.spacing.md,
    width: rem(120),
    height: rem(120),
    borderRadius: "20%",
  },

  itemTitle: {
    marginBottom: `calc(${theme.spacing.xs} / 2)`,
  },
  supTitle: {
    textAlign: "center",
    textTransform: "uppercase",
    fontWeight: 800,
    fontSize: theme.fontSizes.sm,
    color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
      .color,
    letterSpacing: rem(0.5),
    marginTop: theme.spacing.xl,
  },
  supTitle1: {
    letterSpacing: rem(0.5),
    marginTop: theme.spacing.xl,
  },

  description: {
    textAlign: "center",
    textTransform: "uppercase",
    fontWeight: 800,
    fontSize: theme.fontSizes.sm,
    color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
      .color,
    letterSpacing: rem(0.5),
    marginTop: theme.spacing.xs,
  },
}));
