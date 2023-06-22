import { FC } from "react";
import { Card, Group, Text } from "@mantine/core";
import { useStyles } from "@/styles/teacher-image-card.style";
import { TeacherCardProps } from "@/types/teacher/card.interface";

export const TeacherImageCard: FC<TeacherCardProps> = (data) => {
  const { classes } = useStyles();

  return (
    <Card
      p="lg"
      shadow="lg"
      className={classes.card}
      radius="md"
      component="div"
    >
      <div
        className={classes.image}
        style={{ backgroundImage: `url(${data.imageUrl})` }}
      />
      <div className={classes.overlay} />

      <div className={classes.content}>
        <div>
          <Text size="lg" className={classes.title} weight={500}>
            {data.fullName}
          </Text>

          <Group position="apart" spacing="xs">
            <Text size="sm" className={classes.author}>
              {data.position}
            </Text>
          </Group>
        </div>
      </div>
    </Card>
  );
};
