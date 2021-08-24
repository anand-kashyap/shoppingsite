interface ICategory {
  id: string;
  name: string;
  key: string;
  description: string;
  enabled: boolean;
  order: number;
  imageUrl: string;
}

interface IProduct {
  name: string;
  imageURL: string;
  description: string;
  price: number;
  stock: number;
  category: string;
  sku: string;
  id: string;
}

export type { ICategory, IProduct };
