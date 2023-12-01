import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

export const Rating = ({ Rate, Review }: { Rate: number; Review: number }) => {
  return (
    <div className="flex text-sm mt-1">
      <div className="flex items-center text-yellow-500">
        {Rate >= 1 ? <FaStar /> : Rate >= 0.5 ? <FaStarHalfAlt /> : <FaRegStar />}
        {Rate >= 2 ? <FaStar /> : Rate >= 1.5 ? <FaStarHalfAlt /> : <FaRegStar />}
        {Rate >= 3 ? <FaStar /> : Rate >= 2.5 ? <FaStarHalfAlt /> : <FaRegStar />}
        {Rate >= 4 ? <FaStar /> : Rate >= 3.5 ? <FaStarHalfAlt /> : <FaRegStar />}
        {Rate >= 5 ? <FaStar /> : Rate >= 4.5 ? <FaStarHalfAlt /> : <FaRegStar />}
      </div>
      <p className="ml-1">{Review} Reviews</p>
    </div>
  );
};