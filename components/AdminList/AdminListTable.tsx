import {
  Avatar,
  Badge,
  Table,
  Group,
  Text,
  Anchor,
  ScrollArea,
  useMantineTheme,
  TextInput,
  UnstyledButton,
  Center,
  ActionIcon,
} from "@mantine/core";
import {
  IconSearch,
  IconReplace,
} from "@tabler/icons-react";

import { useState } from "react";
import { keys } from "@mantine/utils";

import { useStyles } from "../../styles/adminList.style";
import { RowData, ThProps, UsersTableProps } from "../../types/adminlist.interface";
import { AdminAddModal } from "./AdminAddModal";
import { AdminEditModal } from "./AdminEditModal";
import { AdminDeleteModal } from "./AdminDeleteModal";

const jobColors: Record<string, string> = {
  student: "blue",
  teacher: "cyan",
  admin: "pink",
};

function Th({ children, reversed, sorted, onSort }: ThProps) {
  const { classes } = useStyles();
  
  return (
    <th className={classes.th}>
      <UnstyledButton onClick={onSort} className={classes.control}>
        <Group position="apart">
          <Text fw={500} fz="sm">
            {children}
          </Text>
        </Group>
      </UnstyledButton>
    </th>
  );
}

export function AdminListTable({ data }: UsersTableProps) {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const [search, setSearch] = useState("");
  const [sortedData, setSortedData] = useState(data);
  const [sortBy, setSortBy] = useState<keyof RowData | null>(null);
  const [reverseSortDirection, setReverseSortDirection] = useState(false);

  function filterData(data: RowData[], search: string) {
    const query = search.toLowerCase().trim();
    return data.filter((item) =>
      keys(data[0]).some((key) => item[key].toLowerCase().includes(query))
    );
  }

  function sortData(
    data: RowData[],
    payload: { sortBy: keyof RowData | null; reversed: boolean; search: string }
  ) {
    const { sortBy } = payload;

    if (!sortBy) {
      return filterData(data, payload.search);
    }

    return filterData(
      [...data].sort((a, b) => {
        if (payload.reversed) {
          return b[sortBy].localeCompare(a[sortBy]);
        }

        return a[sortBy].localeCompare(b[sortBy]);
      }),
      payload.search
    );
  }

  const rows = sortedData.map((item, idx) => (
    <tr key={idx}>
      <td>
        <Group spacing="sm">
          <Avatar size={30} src={item.avatar} radius={30} />
        </Group>
      </td>
      <td>
        <Group spacing="sm">
          <Text fz="sm" fw={500}>
            {item.surname}
          </Text>
        </Group>
      </td>
      <td>
        <Group spacing="sm">
          <Text fz="sm" fw={500}>
            {item.name}
          </Text>
        </Group>
      </td>
      <td>
        <Group spacing="sm">
          <Text fz="sm" fw={500}>
            {item.patronymic}
          </Text>
        </Group>
      </td>

      <td>
        <Badge
          color={jobColors[item.role.toLowerCase()]}
          variant={theme.colorScheme === "dark" ? "light" : "outline"}
        >
          {item.role}
        </Badge>
      </td>
      <td>
        <Anchor component="button" size="sm">
          {item.email}
        </Anchor>
      </td>
      <td>
        <Group>
          <AdminEditModal />
          <AdminDeleteModal />
        </Group>
      </td>
    </tr>
  ));

  const setSorting = (field: keyof RowData) => {
    const reversed = field === sortBy ? !reverseSortDirection : false;
    setReverseSortDirection(reversed);
    setSortBy(field);
    setSortedData(sortData(data, { sortBy: field, reversed, search }));
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setSearch(value);
    setSortedData(
      sortData(data, { sortBy, reversed: reverseSortDirection, search: value })
    );
  };
  return (
    <ScrollArea>
      <TextInput
        placeholder="Search by any field"
        mb="md"
        icon={<IconSearch size="0.9rem" stroke={1.5} />}
        value={search}
        onChange={handleSearchChange}
      />
      <div className={classes.table}>
        <Table verticalSpacing="sm">
          <thead>
            <tr>
              <th></th>
              <Th
                sorted={sortBy === "surname"}
                reversed={reverseSortDirection}
                onSort={() => setSorting("surname")}
              >
                Фамилия
              </Th>
              <Th
                sorted={sortBy === "name"}
                reversed={reverseSortDirection}
                onSort={() => setSorting("name")}
              >
                Имя
              </Th>
              <Th
                sorted={sortBy === "patronymic"}
                reversed={reverseSortDirection}
                onSort={() => setSorting("patronymic")}
              >
                Отчество
              </Th>
              <Th
                sorted={sortBy === "role"}
                reversed={reverseSortDirection}
                onSort={() => setSorting("role")}
              >
                Роль
              </Th>
              <Th
                sorted={sortBy === "email"}
                reversed={reverseSortDirection}
                onSort={() => setSorting("email")}
              >
                Почта
              </Th>
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
          <tbody>
            {rows.length > 0 ? (
              rows
            ) : (
              <tr>
                <td colSpan={Object.keys(data[0]).length}>
                  <Text weight={500} align="center">
                    Здесь пусто
                  </Text>
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
    </ScrollArea>
  );
}
