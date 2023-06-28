import {
  Badge,
  Table,
  Group,
  Text,
  Anchor,
  ScrollArea,
  useMantineTheme,
  ActionIcon,
} from "@mantine/core";
import { IconReplace, IconTrash } from "@tabler/icons-react";
import { useStyles } from "../../styles/adminList.style";
import { AdminAddModal } from "./AdminAddModal";
import { AdminEditModal } from "./AdminEditModal";
import React, { FC } from "react";
import { UserApi } from "@/api/axios";
import { ResponseUser } from "@/api/type";
const jobColors: Record<string, string> = {
  Студент: "blue",
  Преподователь: "cyan",
  Администратор: "pink",
};

interface AdminListTableProps {
  userListData: ResponseUser[] | undefined;
}
export const AdminListTable: FC<AdminListTableProps> = ({ userListData }) => {
  const { classes } = useStyles();
  const theme = useMantineTheme();

  const logoutOnClick = async (id: string) => {
    await UserApi.deleteUser(id);
  };
  const rows = userListData?.map((item, idx) => (
    <tr key={idx}>
      <td>
        <Group spacing="sm">
          <Text fz="sm" fw={500}>
            {item?.username}
          </Text>
        </Group>
      </td>
      <td>
        <Group spacing="sm">
          <Text fz="sm" fw={500}>
            {item?.profile.firstName}
          </Text>
        </Group>
      </td>
      <td>
        <Group spacing="sm">
          <Text fz="sm" fw={500}>
            {item?.profile.lastName}
          </Text>
        </Group>
      </td>
      <td>
        <Group spacing="sm">
          <Text fz="sm" fw={500}>
            {item?.profile.patronymic}
          </Text>
        </Group>
      </td>

      <td>
        <Badge
          color={jobColors[item?.role?.name.toLowerCase()]}
          variant={theme.colorScheme === "dark" ? "light" : "outline"}
        >
          {item?.role?.name}
        </Badge>
      </td>
      <td>
        <Anchor component="button" size="sm">
          {item?.email}
        </Anchor>
      </td>
      <td>
        <Group>
          <AdminEditModal />
          <ActionIcon
            color="red"
            variant="outline"
            radius="xs"
            onClick={() => logoutOnClick(item.id)}
          >
            <IconTrash size="1rem" stroke={1.5} />
          </ActionIcon>
        </Group>
      </td>
    </tr>
  ));
  return (
    <ScrollArea>
      <div className={classes.table}>
        <Table verticalSpacing="sm">
          <thead>
            <tr>
              <th></th>
              <th>Фамилия</th>
              <th>Имя</th>
              <th>Отчество</th>
              <th>Роль</th>
              <th>Почта</th>
              <th>
                <Group>
                  <ActionIcon color="blue" variant="outline">
                    <IconReplace size="1rem" stroke={1.5} />
                  </ActionIcon>
                  <AdminAddModal />
                </Group>
              </th>
            </tr>
          </thead>

          <tbody>{rows}</tbody>
        </Table>
      </div>
    </ScrollArea>
  );
};
