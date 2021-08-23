interface ICategory {
  id: string;
  name: string;
  key: string;
  description: string;
  enabled: boolean;
  order: number;
  imageUrl: string;
}

export type { ICategory };
