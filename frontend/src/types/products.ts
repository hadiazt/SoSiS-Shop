export type ProductInfo = {
  _id: string;
  name: string;
  image: string;
  description: string;
  brand: string;
  category: string;
  price: number;
  countInStock: number;
  rating: number;
  numReviews: number;
  features: Array<{
    Name: string;
    Des: string;
  }>;
  warranty: number;
};
