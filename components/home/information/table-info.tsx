import { Container, Accordion } from "@mantine/core";
import { useStyles } from "../../../styles/table.stylex";
import { TableInterface } from "../../../types/table.interface";
import { FC } from "react";

export const TableInfor: FC<TableInterface> = ({ data }) => {
  const { classes } = useStyles();

  return (
    <>
      {data.map((item) => (
        <Container size="sm" key={item.id}>
          <Accordion variant="separated">
            <Accordion.Item className={classes.item} value={String(item.id)}>
              <Accordion.Control className={classes.supTitle}>
                {item.title}
              </Accordion.Control>

              <Accordion.Panel>{item.info}</Accordion.Panel>
            </Accordion.Item>
          </Accordion>
        </Container>
      ))}
    </>
  );
};
