import { Text, Container, AspectRatio } from "@mantine/core";
import { SimpleGrid, Card } from "@mantine/core";
import { useStyles } from "../../styles/NewsStyles";
import { mockdata } from "../../data/News.data";
import Image from "next/image";

export const News = () => {
  const { classes } = useStyles();

  const cards = mockdata.map((article) => {
    return (
      <Card
        key={article.title}
        p="md"
        radius="md"
        component="a"
        href="#"
        className={classes.card}
      >
        <AspectRatio ratio={1920 / 1080}>
          <Image
            priority
            src={article.image}
            width={1000}
            height={1000}
            alt="image"
          />
        </AspectRatio>
        <Text
          color="dimmed"
          size="xs"
          transform="uppercase"
          weight={700}
          mt="md"
        >
          {article.date}
        </Text>
        <Text className={classes.title} mt={5}>
          {article.title}
        </Text>
      </Card>
    );
  });

  return (
    <Container py="xl">
      <Container size={800} className={classes.wrapper}>
        <div className={classes.supTitle}>
          Последние актуальные новости мира КИП и А
        </div>
      </Container>

      <SimpleGrid cols={2} breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
        {cards}
      </SimpleGrid>
    </Container>
  );
};
