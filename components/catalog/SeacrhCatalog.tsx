import {
  Group,
  Text,
  ScrollArea,
  Center,
  TextInput,
  Card,
  Badge,
  Avatar,
  SimpleGrid,
} from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";

import { useState } from "react";
import { keys } from "@mantine/utils";


import { useStyles } from "@/styles/catalogCard.style";
import { CatalogRowData, CatalogSearchCardInterfaceProps } from "@/types/catalogCard.interface";
import Link from "next/link";

export function SearchCatalog({ data }: CatalogSearchCardInterfaceProps) {
  const { classes } = useStyles();
  const [search, setSearch] = useState("");
  const [sortedData, setSortedData] = useState(data);
  const [sortBy] = useState<keyof CatalogRowData | null>(null);
  const [reverseSortDirection] = useState(false);
  function filterData(data: CatalogRowData[], search: string) {
    const query = search.toLowerCase().trim();
    return data.filter((item) =>
      keys(data[0]).some((key) => item[key].toLowerCase().includes(query))
    );
  }
  function sortData(
    data: CatalogRowData[],
    payload: {
      sortBy: keyof CatalogRowData | null;
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
  {
    const rows = sortedData.map((item, idx) => (
      <div key={idx}>
        <Card
          withBorder
          radius="md"
          p="md"
          className={classes.card}
          key={item.title}
        >
          <Card.Section className={classes.line}>
            <Link href={"/characteristics"}>
              <Avatar src={item.image} size={280} />
            </Link>

            <Badge
              className={classes.rating}
              variant="gradient"
              gradient={{ from: "yellow", to: "red" }}
            >
              {item.country}
            </Badge>
            <Text fz="lg" fw={500} lineClamp={1} pl="md" mt="sm" mb="sm">
              {item.title}
            </Text>
          </Card.Section>

          <Card.Section className={classes.section} mt="md">
            <Group position="apart">
              <ScrollArea
                h={150}
                type="hover"
                offsetScrollbars
                scrollbarSize={4}
                styles={(theme) => ({
                  scrollbar: {
                    "&, &:hover": {
                      background:
                        theme.colorScheme === "dark"
                          ? theme.colors.dark[9]
                          : theme.colors.gray[0],
                    },

                    '&[data-orientation="vertical"] .mantine-ScrollArea-thumb':
                      {
                        backgroundColor: theme.colors.red[6],
                      },
                  },
                })}
              >
                <Text fz="sm" color="dimmed" size="xs" pl="sm">
                  {item.description}
                </Text>
              </ScrollArea>
            </Group>
          </Card.Section>
          <Card.Section className={classes.section}>
            <Text className="flex justify-center mt-4">
              <Badge
                variant="gradient"
                gradient={{ from: "yellow", to: "red" }}
              >
                Автор
              </Badge>
            </Text>
            <Group spacing={7} mt={5}>
              <Group position="apart">
                <Center>
                  <Group>
                    <Avatar src={item.imgauthor} size={30} radius="xl" />

                    <Text fz="sm" fw={200} lineClamp={1}>
                      {item.author}
                    </Text>
                  </Group>
                </Center>
              </Group>
            </Group>
          </Card.Section>
        </Card>
      </div>
    ));
    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.currentTarget;
      setSearch(value);
      setSortedData(
        sortData(data, {
          sortBy,
          reversed: reverseSortDirection,
          search: value,
        })
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

        <div>
          {rows.length > 0 ? (
            <SimpleGrid
              cols={4}
              spacing={20}
              breakpoints={[
                { maxWidth: "xs", cols: 2, spacing: 15 },
                { maxWidth: "sm", cols: 3, spacing: 15 },
                { maxWidth: "md", cols: 3, spacing: 15 },
                { maxWidth: "lg", cols: 4, spacing: 15 },
              ]}
              style={{ marginTop: 20, marginLeft: 20, marginBottom: 20 }}
            >
              {...rows}
            </SimpleGrid>
          ) : (
            <h1>Ничего нет</h1>
          )}
        </div>
      </ScrollArea>
    );
  }
}
