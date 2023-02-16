function FindAverageRating(ratingData) {
  let ratingArray = [];
  ratingData.map((ratingObject, i) => {
    console.log(ratingObject);
    return (ratingArray = [...ratingArray, ratingObject.rating]);
  });

  // Calculate the sum of the numbers
  const sum = ratingArray.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );

  // Calculate the average by dividing the sum by the number of numbers
  const average = sum / ratingArray.length;

  // Round the average to the nearest integer
  const roundedAverageRating = Math.round(average);

  return roundedAverageRating;
}

export default FindAverageRating;
