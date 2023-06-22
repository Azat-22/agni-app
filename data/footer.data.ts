import { FooterLinksProps } from "../components/home/Footer/Footer";

export const statsData: FooterLinksProps = {
  data:{
  image:"/logo-horizont.svg",
  info: [
    {
      title: "Связь с Агни",
      links: [
        {
          label: "8(8553)31-01-51",
          link: "",
        },
        {
          label: "ait@agni-rt.ru",
          link: "",
        },
      ],
    },
    {
      title: "Библиотека АГНИ",
      links: [
        {
          label: "Каталог",
          link: "http://elibrary.agni-rt.ru:8000/index.php?page=category&sort=1&view=1&category=102",
        },
        {
          label: "ИСУ АГНИ",
          link: "http://is.agni-rt.ru:8080/isu_agni/index.php",
        },
      ],
    },
  ],
},
};
