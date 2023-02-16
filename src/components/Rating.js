import FindAverageRating from "../functions/FindAverageRating";
import useFetchRating from "../hooks/useFetchRating";

const Rating = ({ classId }) => {
  const { content: RatingData } = useFetchRating({ id: classId });

  let finalRating = (RatingData[0] && FindAverageRating(RatingData)) || 0;

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
