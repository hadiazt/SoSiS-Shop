export type ProductInfo = {
  _id: string;
  Name: string;
  IMG: string;
  Description: string;
  Brand: string;
  Category: string;
  Price: number;
  CountInStock: number;
  Rating: number;
  NumReviews: number;
  Features: Array<{
    Name: string;
    Des: string;
  }>;
  Warranty: number;
};
