import {
  Text,
  Title,
  Button,
} from "@mantine/core";

import Image from "next/image";



import { FC } from "react";

import { CharacteristicsListTable } from "./characteristicsTable";
import { CharacteristicsInterface } from "@/types/characteristicsProfie.interface";
import { chardata } from "@/data/characteristicsList.data";
import { useStyles } from "@/styles/characteristicProfile.style";
import Link from "next/link";

export const CharacteristicsProfile: FC<CharacteristicsInterface> = ({
  data,
}) => {
  const { classes } = useStyles();
  return (
    <>
      {data.map((item, idx) => (
        <div key={idx}>
          <div className={classes.wrapper}>
            <div className={classes.body}>
              <Title className={classes.title}>{item.data.name}</Title>
              <Text fw={500} fz="lg" mb={5}>
                Краткое описание
              </Text>
              <Text fz="sm" c="dimmed">
                {item.data.description}
              </Text>

              <div className={classes.controls}>
                <Link href="/catalog">
                  <Button variant="outline">Каталог</Button>
                </Link>
              </div>
            </div>
            <Image
              className={classes.image}
              priority
              src={item.data.image}
              width={1000}
              height={1000}
              alt="image"
            />
          </div>
          <CharacteristicsListTable data={chardata} />
        </div>
      ))}
    </>
  );
};
