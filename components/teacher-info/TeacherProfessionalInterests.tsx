import { IconHeartFilled } from "@tabler/icons-react";
import { Group, Text } from "@mantine/core";
import { FC } from "react";
import { useStyles } from "@/styles/teacher-professional-interests.styles";
import { ProfessionalInterestsType } from "@/types/teacher/interests.interface";

export const TeacherProfessionalInterests: FC<ProfessionalInterestsType> = ({
  data,
}) => {
  const { classes } = useStyles();

  return (
    <div>
      {data.map((item, idx) => (
        <div key={idx}>
          <Group key={idx}>
            <div>
              <Text
                className={classes.title}
                fz="xs"
                tt="uppercase"
                fw={700}
                ml={25}
              >
                {item.title}
              </Text>
              {item.interests.map((interest) => (
                <Group spacing={10} mt={3} key={interest.id}>
                  <IconHeartFilled
                    stroke={1.5}
                    size="1rem"
                    className={classes.icon1}
                  />
                  <Text className={classes.title} key={interest.id} fz="xs">
                    {interest.text}
                  </Text>
                </Group>
              ))}
            </div>
          </Group>
        </div>
      ))}
    </div>
  );
};
