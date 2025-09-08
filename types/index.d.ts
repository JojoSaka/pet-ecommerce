declare type ProductParams = {
  name: string;
  description: string;
  price: string;
  quantity: string;
  image: string;
  category: string
}

declare type Product = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  description: string;
  image: string;
  category: string;
};