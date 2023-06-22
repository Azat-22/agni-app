
export interface HomeProps {
  data: {
    title: string;
    interests: HomeInterestsProps[];
    image:string;
  };
}
export interface HomeInterestsProps {
  id: number;
  text: string;
}
