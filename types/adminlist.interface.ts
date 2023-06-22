 export interface UsersTableProps {
  data: {
    avatar: string;
    name: string;
    role: string;
    email: string;
    surname: string;
    patronymic: string;
  }[];
}
export interface RowData {
  avatar: string;
  name: string;
  role: string;
  email: string;
  surname: string;
  patronymic: string;
}

export interface ThProps {
  children?: React.ReactNode;
  reversed?: boolean;
  sorted?: boolean;
  onSort(): void | null;
}