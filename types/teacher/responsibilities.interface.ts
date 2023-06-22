export interface TeacherResponsibilitiesInterface {
  title: string;
  responsibilities: ResponsibilitiesProps[];
}

export interface ResponsibilitiesProps {
  id: number;
  text: string;
}

export interface ResponsibilitiesType {
  data: TeacherResponsibilitiesInterface[]
}