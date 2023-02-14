const Rating = ({ rating }) => {
  let squareStyle = "w-5 h-5 ";

  rating = 4;

  return (
    <>
      <div className="flex gap-[1px]">
        {[...Array(5)].map((_, index) => (
          <div
            key={index}
            className={
              index < rating
                ? squareStyle + "bg-pinkish"
                : squareStyle + "bg-customGray"
            }
          ></div>
        ))}
        {/* <div className={squareStyle}></div>
        <div className={squareStyle}></div>
        <div className={squareStyle}></div>
        <div className={squareStyle}></div>
        <div className={squareStyle}></div> */}
      </div>
    </>
  );
};

export default Rating;
