import {
  Table,
  Group,
  Text,
  ScrollArea,
  useMantineTheme,
  ActionIcon,
} from "@mantine/core";
import { IconReplace, IconTrash } from "@tabler/icons-react";
import React  from "react";
import { UserApi } from "@/api/axios";
import { useStyles } from "@/styles/adminList.style";
import { useAppSelector } from "@/api/redux/hooks";
import { TypeEditModal } from "./TypeEditModal";
import { TypeAddModal } from "./TypeAddModal";
import { selectTypeListData } from "@/api/redux/slices/type";

export function TypeListTable()  {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const logoutOnClick = async (id: string) => {
    await UserApi.deleteType(id);
  };
  const typeListData = useAppSelector(selectTypeListData);
  const typeList = typeListData?.map((item, idx) => (
    <tr key={idx}>
      <td></td>
      <td>
        <Group spacing="sm">
          <Text fz="sm" fw={500}>
            {item?.name}
          </Text>
        </Group>
      </td>
      <td className="flex justify-end">
        <Group>
          <TypeEditModal />
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
              <th>Тип</th>
              <th className="flex justify-end">
                <Group>
                  <ActionIcon color="blue" variant="outline">
                    <IconReplace size="1rem" stroke={1.5} />
                  </ActionIcon>
                  <TypeAddModal />
                </Group>
              </th>
            </tr>
          </thead>
          <tbody>{typeList}</tbody>
        </Table>
      </div>
    </ScrollArea>
  );
}
