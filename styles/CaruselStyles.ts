import { createStyles, getStylesRef, rem } from "@mantine/core";


 export const useStyles = createStyles((theme) => ({
   card: {
     height: rem(500),
     display: "flex",
     flexDirection: "column",
     justifyContent: "space-between",
     alignItems: "flex-start",
     backgroundSize: "cover",
     backgroundPosition: "center",
     border: "2px solid",
     borderRadius: "10px",
     borderColor:
       theme.colorScheme === "dark"
         ? theme.colors.blue[6]
         : theme.colors.gray[2],
   },

   category: {
     color: theme.white,
     opacity: 0.7,
     fontWeight: 700,
     textTransform: "uppercase",
   },
   price: {
     color: theme.colorScheme === "dark" ? theme.white : theme.black,
   },

   carousel: {
     "&:hover": {
       [`& .${getStylesRef("carouselControls")}`]: {
         opacity: 1,
       },
     },
   },

   carouselControls: {
     ref: getStylesRef("carouselControls"),
     transition: "opacity 150ms ease",
     opacity: 0,
   },

   carouselIndicator: {
     width: rem(4),
     height: rem(4),
     transition: "width 250ms ease",

     "&[data-active]": {
       width: rem(16),
     },
   },
   image:{
    height: 220
   },
   
   
 }));