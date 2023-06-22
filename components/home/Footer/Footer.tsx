import { Text, Container } from "@mantine/core";
import { useStyles } from "../../../styles/footer.styles";
import Link from "next/link";
import Image from "next/image";

export interface FooterLinksProps {
  data:{
  image: string;
  info: {
    title: string;
    links: { label: string; link: string }[];
  }[];
}
}

export function Footer({ data }: FooterLinksProps) {
  const { classes } = useStyles();

  const groups = data.info.map((group) => {
    const links = group.links.map((link, index) => (
      <Link key={index} className={classes.link} href={link.link}>
        {link.label}
      </Link>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <div>
          <Image
            className={classes.logo}
            priority
            src={data.image}
            width={1000}
            height={1000}
            alt="image"
          />
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>
    </footer>
  );
}
