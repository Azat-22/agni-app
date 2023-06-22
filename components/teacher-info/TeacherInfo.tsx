import { Col, Container, Grid, SimpleGrid, Text, Title } from "@mantine/core";

import { FC } from "react";
import {
  TeacherData,
  TeacherDataProps,
} from "@/types/teacher/teacher-info.interface";
import { TeacherImageCard } from "./TeacherImageCard";
import { TeacherProfessionalInterests } from "./TeacherProfessionalInterests";
import { useStyles } from "@/styles/teacher-image-card.style";
import { TeacherContacts } from "./TeacherContacts";
import { TeacherResponsibilities } from "./TeacherResponsibilities";
import { useRouter } from "next/router";

export const TeacherInfo: FC<TeacherDataProps> = ({ data }) => {
  const router = useRouter();
  const teacherIdx = router.query.teacherId;
  const oneTeacherData = data.filter(
    (value) => value.id === Number(teacherIdx)
  );
  const { classes } = useStyles();

  const component = oneTeacherData.map((teacher) => {
    return (
      <div className="flex w-full" key={teacher.id}>
        <Container>
          <div className="my-10">
            <Grid gutter={80}>
              <Col span={12} md={5}>
                <SimpleGrid
                  cols={1}
                  spacing={20}
                  breakpoints={[
                    { maxWidth: "xs", cols: 1, spacing: "xs" },
                    { maxWidth: "sm", cols: 1, spacing: "sm" },
                    { maxWidth: "md", cols: 2, spacing: "md" },
                    { maxWidth: "xl", cols: 1, spacing: "xl" },
                  ]}
                >
                  <Title order={2}>
                    <TeacherImageCard
                      imageUrl={teacher.teacherInfo.imageUrl}
                      fullName={teacher.teacherInfo.fullName}
                      position={teacher.teacherInfo.position}
                    />
                  </Title>
                  <SimpleGrid
                    cols={2}
                    breakpoints={[
                      { maxWidth: "xs", cols: 1, spacing: "xs" },
                      { maxWidth: "sm", cols: 2, spacing: "sm" },
                      { maxWidth: "md", cols: 1, spacing: "md" },
                      { maxWidth: "xl", cols: 1, spacing: "xl" },
                    ]}
                  >
                    <Text className={classes.title} size="lg">
                      <TeacherContacts
                        title={teacher.contacts.title}
                        email={teacher.contacts.email}
                        phone={teacher.contacts.phone}
                      />
                    </Text>

                    <Text className={classes.title} size="lg">
                      <TeacherProfessionalInterests data={teacher.interests} />
                    </Text>
                  </SimpleGrid>
                </SimpleGrid>
              </Col>
              <Col span={12} md={7}>
                <SimpleGrid
                  cols={1}
                  spacing={20}
                  breakpoints={[
                    { maxWidth: "xs", cols: 1 },
                    { maxWidth: "sm", cols: 1 },
                    { maxWidth: "md", cols: 1 },
                    { maxWidth: "xl", cols: 1 },
                  ]}
                >
                  <TeacherResponsibilities data={teacher.responsibilities} />
                </SimpleGrid>
              </Col>
            </Grid>
          </div>
        </Container>
      </div>
    );
  });

  return <div>{component}</div>;
};
