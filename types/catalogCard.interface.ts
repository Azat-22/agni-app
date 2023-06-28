
export interface CatalogSearchCardInterfaceProps {
  data: {
    image: string;
    title: string;
    country: string;
    description: string;
    author: string;
    imgauthor: string;
    link: string;
  }[];
}

export interface CatalogRowData {
  image: string;
  title: string;
  country: string;
  description: string;
  author: string;
  imgauthor: string;
  link: string;
}

export interface CatalogThProps {
  children?: React.ReactNode;
  reversed?: boolean;
  sorted?: boolean;
  onSort(): void | null;
}
