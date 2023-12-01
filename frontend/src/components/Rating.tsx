export const Rating = ({ Rate, Review }: { Rate: number; Review: number }) => {
    return <p className="mt-1 text-sm text-gray-500">{Rate + Review}</p>;
  };