import { RootLayout } from "@/components/layout/RootLayout";
import { TeacherInfo } from "@/components/teacher-info/TeacherInfo";
import { teacherData } from "@/data/teacher.data";
import React from "react";

export default function TeacherInfoPage() {
  return (
    <RootLayout>
      <TeacherInfo data={teacherData.data} />
    </RootLayout>
  );
}
