import { useParams, Link } from "react-router-dom";
import { Rating } from "../components/Rating";

import { products } from "../products";

export const ProductScreen = () => {
  const { id: ProductID } = useParams();
  const Product = products.find((p) => p._id === ProductID);
  console.log(Product);

  return (
    <>
      <div className="mx-auto p-10 lg:max-w-full">
        <Link
          className=" items-center justify-center rounded-md border border-transparent bg-indigo-600 p-2 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          to="/"
        >
          Go Back
        </Link>

        <div className="mx-auto p-5 border-4 border-red-700">
          <p className="text-center font-bold">{Product?.name}</p>
          <div className="max-w-md">
            <img
              src={Product?.image}
              className="h-full w-full object-cover object-center lg:h-full lg:w-full rounded-3xl"
            />
          </div>
          {/* <img src={Product?.image} className="rounded-2xl w-1/3 h-auto" /> */}
          {/* <image href={Product?.image} className="w-10"></image> */}
        </div>
      </div>
    </>
  );
};
