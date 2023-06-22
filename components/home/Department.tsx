import { Container, SimpleGrid } from "@mantine/core";
import { TableInfor } from "./information/table-info";
import { FeaturesImages } from "./information/labcab202-206";
import {
  caruselImageData,
  caruselImageData1,
  caruselImageData2,
  caruselImageData3,
} from "../../data/labcab.data202-206";

import { TableInterfaceData1 } from "../../data/table-info-data";
import { CardsCarousel } from "./carusel/Carusel";
import { Footer } from "./Footer/Footer";
import { statsData } from "@/data/footer.data";
import { useStyles } from "@/styles/labcab.styles";

export const DepartmentMain = () => {
  const { classes } = useStyles();
  return (
    <div className="w-full items-center justify-center">
      <div className=" my-4 ">
        <Container size={800} className={classes.wrapper}>
          <div className={classes.supTitle}>
            Кафедра автоматизации и информационных технологий
          </div>
          <div className={classes.supTitle}>
            Учебно-материальная база кафедры состоит из ряда специализированных
            учебных лабораторий:
          </div>
          <div className={classes.supTitle1}>
            <TableInfor data={TableInterfaceData1} />
          </div>

          <div color="dimmed" className={classes.description}>
            В состав НОЦ входят следующие учебные лаборатории:
          </div>

          <SimpleGrid
            cols={2}
            spacing={1}
            breakpoints={[{ maxWidth: 550, cols: 1, spacing: 40 }]}
            style={{ marginTop: 30 }}
          >
            <FeaturesImages data={caruselImageData} />
            <FeaturesImages data={caruselImageData1} />
            <FeaturesImages data={caruselImageData2} />
            <FeaturesImages data={caruselImageData3} />
          </SimpleGrid>
        </Container>
        <Container>
          <CardsCarousel />
        </Container>
      </div>
      <div>
        <Footer data={statsData.data} />
      </div>
    </div>
  );
};
