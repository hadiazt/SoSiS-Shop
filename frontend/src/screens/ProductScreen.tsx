import { useParams, Link } from "react-router-dom";
import { Rating } from "../components/Rating";
import { useLayoutEffect, useState } from "react";
import axios from "axios";
import { ProductInfo } from "../types/products";

import {
  HiMiniCheckBadge,
  HiBuildingStorefront,
  HiMiniBanknotes,
  HiShoppingCart,
  HiMiniXMark,
} from "react-icons/hi2";

export const ProductScreen = () => {
  const [Product, setProduct] = useState<ProductInfo>();
  const { id: ProductID } = useParams();

  const fetchProduct = async () => {
    const { data } = await axios.get(
      "http://localhost:3000/api/v1/product/" + ProductID
    );

    setProduct(data);
  };

  useLayoutEffect(() => {
    fetchProduct();
  }, [ProductID]);

  // const Product = products.find((p: { _id: string }) => p._id === ProductID);

  return (
    <>
      <div className="mx-auto p-10 lg:max-w-full">
        <div className="mb-7">
          <Link
            style={{ background: "#202D47" }}
            className="items-center justify-center rounded-md border border-transparent  p-2 text-base font-medium text-white "
            to="/"
          >
            Go Back
          </Link>
        </div>

        <div className="p-5">
          <div className="mx-auto  p-5 bg-gray-200 rounded-2xl flex flex-col lg:flex-row drop-shadow-2xl">
            {/* Image */}
            <div className="max-w-md">
              <img
                src={Product?.image}
                className="h-full w-full object-cover object-center lg:h-full lg:w-full rounded-3xl"
              />
            </div>

            {/* Name & ... */}
            <div className="pl-5">
              <div className="border-2 rounded-xl mt-5 ml-auto">
                <p className="font-medium text-2xl">{Product?.name}</p>
                <Rating
                  Rate={Product?.rating || 0}
                  Review={Product?.numReviews || 0}
                />
                <div className="border-t-2 border-gray-300 border-solid mb-4 mt-4"></div>
                <p className="flex items-center text-2xl m-2">
                  <HiMiniBanknotes />
                  <span className="-mt-1 ml-3">{Product?.price}$</span>
                </p>
                <p className="flex items-center text-2xl m-2">
                  {Product?.countInStock || 0 > 0 ? (
                    <HiShoppingCart />
                  ) : (
                    <HiMiniXMark />
                  )}
                  <span className="-mt-1 ml-3">
                    {Product?.countInStock || 0 > 0
                      ? Product?.countInStock + " In Stock"
                      : "Out Of Stock"}
                  </span>
                </p>
                <p className="flex items-center text-2xl m-2">
                  <HiMiniCheckBadge />
                  <span className="-mt-1 ml-3">
                    {Product?.warranty} Month Warranty
                  </span>
                </p>
                <p className="flex items-center text-2xl m-2">
                  <HiBuildingStorefront />
                  <span className="-mt-1 ml-3">{Product?.brand}</span>
                </p>

                <div className="border-t-2 border-gray-300 border-solid mb-4 mt-4"></div>
                {Product?.countInStock || 0 > 0 ? (
                  <Link
                    style={{ background: "#202D47" }}
                    className="flex items-center justify-center rounded-md border border-transparent p-2 text-base font-medium text-white w-full"
                    to="/"
                  >
                    <span className="text-2xl">
                      <HiShoppingCart />
                    </span>
                    <span className="ml-2">Add To Cart</span>
                  </Link>
                ) : (
                  <>
                    <Link
                      style={{ background: "#202D47", cursor: "default" }}
                      className="flex items-center justify-center rounded-md border border-transparent p-2 text-base font-medium text-white w-full"
                      to={"/product/" + ProductID}
                    >
                      <span className="text-4xl">
                        <HiMiniXMark />
                      </span>
                      <span className="ml-2">Out Of Stock</span>
                    </Link>
                  </>
                )}
              </div>
            </div>

            {/* Features & Des */}
            <div>
              <div className="pl-4 mt-5">
                {Product?.features && Product?.features.length > 0 && (
                  <p className="font-medium text-xl mt-5">Features :</p>
                )}
                <ul>
                  {Product?.features?.map(
                    (item: { Name: string; Des: string }) => (
                      <>
                        <li className="mt-2 ml-2">
                          <span className="text-neutral-500 items-start mb-1">
                            • {item.Name} :
                          </span>
                          <span className="text-neutral-700"> {item.Des}</span>
                        </li>
                      </>
                    )
                  )}
                </ul>

                <p className="max-w-screen-sm ">{Product?.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
