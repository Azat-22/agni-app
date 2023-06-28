import {
  Table,
  Group,
  Text,
  ScrollArea,
  useMantineTheme,
  ActionIcon,
} from "@mantine/core";
import { IconReplace, IconTrash } from "@tabler/icons-react";
import React, { FC } from "react";
import { UserApi } from "@/api/axios";
import { useStyles } from "@/styles/adminList.style";
import { BrandEditModal } from "./BrandEditModal";
import { BrandAddModal } from "./BrandAddModal";
import { ResponseBrand } from "@/api/catalogType";
import { useAppSelector } from "@/api/redux/hooks";
import { selectBrandListData } from "@/api/redux/slices/brand";

export function BrandListTable()  {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const logoutOnClick = async (id: string) => {
    await UserApi.deleteBrand(id);
  };
  const brandListData = useAppSelector(selectBrandListData);
  const brandList = brandListData?.map((item, idx) => (
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
          <BrandEditModal />
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
              <th>Бренд</th>
              <th className="flex justify-end">
                <Group>
                  <ActionIcon color="blue" variant="outline">
                    <IconReplace size="1rem" stroke={1.5} />
                  </ActionIcon>
                  <BrandAddModal />
                </Group>
              </th>
            </tr>
          </thead>
          <tbody>{brandList}</tbody>
        </Table>
      </div>
    </ScrollArea>
  );
}
