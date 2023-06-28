import { useMediaQuery } from "@mantine/hooks";
import {
  Text,
  Card,
  Group,
  Button,
  useMantineTheme,
  rem,
} from "@mantine/core";
import { useStyles } from "../../../styles/CaruselStyles";
import { data } from "../../../data/carusel.data"
import Link from "next/link";
import Image from "next/image";
import { Carousel } from "@mantine/carousel";
interface CardProps {
  image: string;
  title: string;
  text: string;
  link: string;
}

function CaruselCard({ image, title, text,link }: CardProps) {
  const { classes } = useStyles();
  return (
    <div className={classes.card}>
      <Card radius="md" padding="xl" className="h-full">
        <Card.Section>
          <Image
            className={classes.image}
            src={image}
            width={1000}
            height={1000}
            alt="image"
          />
        </Card.Section>

        <Group position="apart" mt="lg">
          <Text fw={250} fz="lg">
            {title}
          </Text>
        </Group>
        <Text
          fz="sm"
          c="dimmed"
          mt="sm"
          className="flex items-center justify-center mx-auto my-auto"
        >
          {text}
        </Text>
        <Group
          position="apart"
          mt="md"
          className="flex items-center w-full mx-auto"
        >
          <div className="flex items-center justify-center mx-auto my-auto">
            <Link href={link}>
              <Button variant="outline" radius="md">
                Профиль
              </Button>
            </Link>
          </div>
        </Group>
      </Card>
    </div>
  );
}

export function CardsCarousel() {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <CaruselCard {...item} />
    </Carousel.Slide>
  ));

  return (
    <Carousel
      slideSize="25%"
      breakpoints={[
        { maxWidth: "xs", slideSize: "50%", slideGap: rem(4) },
        { maxWidth: "sm", slideSize: "33%", slideGap: rem(8.5) },
        { maxWidth: "md", slideSize: "25%", slideGap: rem(3) },
        { maxWidth: "lg", slideSize: "25%", slideGap: rem(3) },
      ]}
      slideGap="xl"
      align="start"
      slidesToScroll={mobile ? 1 : 2}
      withIndicators
      loop
      classNames={{
        root: classes.carousel,
        controls: classes.carouselControls,
        indicator: classes.carouselIndicator,
      }}
    >
      {slides}
    </Carousel>
  );
}
