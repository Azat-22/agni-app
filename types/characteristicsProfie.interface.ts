export interface CharacteristicsInterface {
  data: CharacteristicsProfileProps[];
}
export interface CharacteristicsProfileProps {
  data: {
    name: string;
    image: string;
    description: string;
  };
}