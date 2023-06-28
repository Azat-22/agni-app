import {
  Table,
  Group,
  Text,
  ScrollArea,
  TextInput,
  UnstyledButton,
  
} from "@mantine/core";
import {
  IconSearch,
} from "@tabler/icons-react";

import { useState } from "react";
import { keys } from "@mantine/utils";


import { useStyles } from "@/styles/characteristicslStyles";
import { CharacteristicsRowData, CharacteristicsTableProps, CharacteristicsThProps } from "@/types/characteristics.interface";

function Th({ children }: CharacteristicsThProps) {
  const { classes } = useStyles();
  return (
    <th className={classes.th}>
      <UnstyledButton  className={classes.control}>
        <Group position="apart">
          <Text fw={500} fz="sm">
            {children}
          </Text>
        </Group>
      </UnstyledButton>
    </th>
  );
}
export function CharacteristicsListTable({ data }: CharacteristicsTableProps) {
  const { classes } = useStyles();
  const [search, setSearch] = useState("");
  const [sortedData, setSortedData] = useState(data);
  const [sortBy] = useState<keyof CharacteristicsRowData | null>(
    null
  );
  const [reverseSortDirection] = useState(false);

  function filterData(data: CharacteristicsRowData[], search: string) {
    const query = search.toLowerCase().trim();
    return data.filter((item) =>
      keys(data[0]).some((key) => item[key].toLowerCase().includes(query))
    );
  }

  function sortData(
    data: CharacteristicsRowData[],
    payload: {
      sortBy: keyof CharacteristicsRowData | null;
      reversed: boolean;
      search: string;
    }
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
          <Text fz="sm" fw={500}>
            {item.options}
          </Text>
        </Group>
      </td>
      <td>
        <Text fz="sm" fw={500}>
          {item.values}
        </Text>
      </td>
    </tr>
  ));
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
            <Th>Технические характеристики</Th>
             <Th >Значения</Th>
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
