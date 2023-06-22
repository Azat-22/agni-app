import { useStyles } from "@/styles/teacher-responsibilities.styles";
import { ResponsibilitiesType } from "@/types/teacher/responsibilities.interface";
import {List, Text, ThemeIcon} from "@mantine/core";
import {IconCircleCheck} from "@tabler/icons-react";
import {FC} from "react";



export const TeacherResponsibilities: FC<ResponsibilitiesType> = ({ data }) => {
  const { classes } = useStyles();
  return (
    <div>
      {data.map((item) => (
        <List
          key={item.title}
          className={classes.title}
          spacing="xs"
          size="xl"
          center
          icon={
            <ThemeIcon className={classes.IconColor} size={24} radius="xl">
              <IconCircleCheck size="1rem" />
            </ThemeIcon>
          }
        >
          <Text fw={500} mb={10} ml={25}>
            {item.title}
          </Text>
          {item.responsibilities.map((responsibility) => (
            <List.Item key={responsibility.id} fz="sm">
              {responsibility.text}
            </List.Item>
          ))}
        </List>
      ))}
    </div>
  );
};