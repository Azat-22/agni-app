import { Text, List, ThemeIcon, rem } from "@mantine/core";
import { Container, Title, Button, Group } from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";
import Image from "next/image";
import { selectUserData } from "../../api/redux/slices/user";
import { useAppSelector } from "../../api/redux/hooks";
import Link from "next/link";
import { HomeProps } from "@/types/homeinterface";
import { useStyles } from "@/styles/Home.style";

export function Home({ data }: HomeProps) {
  const { classes } = useStyles();
  const userData = useAppSelector(selectUserData);
  return (
    <div>
      <Container key={data.title}>
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              Добро <span className={classes.highlight}>пожаловать</span>{" "}
              дорогой друг
            </Title>
            <Text color="dimmed" mt="md">
              {data.title}
            </Text>

            <List
              mt={30}
              spacing="sm"
              size="sm"
              icon={
                <ThemeIcon size={24} radius="xl">
                  <IconCheck size={rem(14)} stroke={1.5} />
                </ThemeIcon>
              }
            >
              {data.interests.map((interest) => (
                <List.Item key={interest.id}>{interest.text}</List.Item>
              ))}
            </List>
            {userData ? null : (
              <Group mt={30} className="justify-center">
                <Link href="/auth/register">
                  <Button radius="xl" size="md" className={classes.control}>
                    Включайся
                  </Button>
                </Link>
              </Group>
            )}
          </div>
          <div className={classes.image}>
            <Image
              className={classes.image}
              priority
              src={data.image}
              width={1000}
              height={1000}
              alt="image"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
