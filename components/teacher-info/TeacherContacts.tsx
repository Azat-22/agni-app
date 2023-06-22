import { FC } from "react";
import { Group, Text } from "@mantine/core";
import { IconAt, IconPhoneCall } from "@tabler/icons-react";
import { useStyles } from "@/styles/teacher-contacts.styles";
import { TeacherContactsProps } from "@/types/teacher/contacts.interface";

export const TeacherContacts: FC<TeacherContactsProps> = (data) => {
  const { classes } = useStyles();
  return (
    <div>
      <Group noWrap>
        <div>
          <Text fz="xs" tt="uppercase" fw={700} ml={25}>
            {data.title}
          </Text>
          {data.email === "" ? null : (
            <Group noWrap spacing={10} mt={3}>
              <IconAt stroke={1.5} size="1rem" className={classes.icon} />
              <Text fz="xs">{data.email}</Text>
            </Group>
          )}
          {data.phone === "" ? null : (
            <Group noWrap spacing={10} mt={5}>
              <IconPhoneCall
                stroke={1.5}
                size="1rem"
                className={classes.icon}
              />
              <Text fz="xs">{data.phone}</Text>
            </Group>
          )}
        </div>
      </Group>
    </div>
  );
};
