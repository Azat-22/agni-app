import { teacherData } from "@/data/teacher.data";
import { TeacherCardProps } from "./card.interface";
import { TeacherContactsProps } from "./contacts.interface";
import { TeacherProfessionalInterestsInterface } from "./interests.interface";
import { TeacherResponsibilitiesInterface } from "./responsibilities.interface";

export interface TeacherData {
  id: number;
  teacherInfo: TeacherCardProps;
  contacts: TeacherContactsProps;
  interests: TeacherProfessionalInterestsInterface[];
  responsibilities: TeacherResponsibilitiesInterface[];
}

export interface TeacherDataProps {
  data: TeacherData[]
}
