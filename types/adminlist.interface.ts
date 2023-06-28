 export interface ResponseUser {
   data: {
     username: string;
     email: string;
     lastName: string;
     firstName: string;
     patronymic: string;
     name: string;
   }[];
 }
export interface RowData {
  username: string;
  email: string;
  lastName: string;
  firstName: string;
  patronymic: string;
  name: string;
}

export interface ThProps {
  children?: React.ReactNode;
  reversed?: boolean;
  sorted?: boolean;
  onSort(): void | null;
}