import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Rating } from "./Rating";

export const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("http://localhost:3000/api/v1/product/");
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map(
            (product: {
              _id: string;
              name: string;
              image: string;
              category: string;
              price: number;
              rating: number;
              numReviews: number;
            }) => (
              <div
                key={product._id}
                className="group relative p-2 rounded-xl shadow-xl transition ease-in-out delay-150 bg-gray-200 hover:-translate-y-1 hover:scale-110 hover:bg-gray-100 duration-500"
              >
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <Link to={`/product/${product._id}`}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </Link>
                    </h3>
                    <Rating Rate={product.rating} Review={product.numReviews} />{" "}
                    <p className="mt-1 text-sm text-gray-500">
                      {product.category}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    {product.price}$
                  </p>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};
