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

  const finalRating = FindAverageRating(ratingData);

  let squareStyle = "w-5 h-5 ";
  return (
    <>
      <div className="flex gap-[1px]">
        {[...Array(5)].map((_, index) => (
          <div
            key={index}
            className={
              index < finalRating
                ? squareStyle + "bg-pinkish"
                : squareStyle + "bg-customGray"
            }
          ></div>
        ))}
      </div>
    </>
  );
};

export default Rating;
