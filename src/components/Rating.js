import FindAverageRating from "../functions/FindAverageRating";

const Rating = ({ ratingData }) => {
  ratingData = [
    {
      id: 1,
      classId: 2,
      userId: 1,
      rating: 5,
    },
    {
      id: 2,
      classId: 2,
      userId: 4,
      rating: 2,
    },
    {
      id: 3,
      classId: 2,
      userId: 2,
      rating: 4,
    },
  ];

  let finalRating = FindAverageRating(ratingData);
  finalRating = false;

  let squareStyle = "w-5 h-5 ";
  return (
    <>
      <div className="flex gap-[1px]">
        {/* _ is dummy parameter, this map does not use currentValue parameter */}
        {(finalRating &&
          [...Array(5)].map((_, index) => (
            <div
              key={index}
              className={
                index < finalRating
                  ? squareStyle + "bg-pinkish"
                  : squareStyle + "bg-customGray"
              }
            ></div>
          ))) || (
          <p className="bg-customGray w-[105px] text-clip whitespace-nowrap overflow-hidden">
            No rating found
          </p>
        )}
      </div>
    </>
  );
};

export default Rating;
