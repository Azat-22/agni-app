export interface TeacherProfessionalInterestsInterface {
  title: string;
  interests: ProfessionalInterestsProps[];
}

export interface ProfessionalInterestsProps {
  id: number;
  text: string;
}

export interface ProfessionalInterestsType {
  data: TeacherProfessionalInterestsInterface[]
}