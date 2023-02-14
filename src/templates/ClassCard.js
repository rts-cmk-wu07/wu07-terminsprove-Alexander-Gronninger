import ClassImage from "../components/ClassImage";
import Rating from "../components/Rating";

const ClassCard = ({ image, title, rating }) => {
  return (
    <>
      <div className="mr-4">
        <ClassImage image="https://picsum.photos/200" />
        <h3 className="text-small overflow-hidden max-w-[150px] max-h-[26px] truncate">
          Lorem Ipsumssssssssssss
        </h3>
        <Rating rating={rating} />
      </div>
    </>
  );
};

export default ClassCard;
