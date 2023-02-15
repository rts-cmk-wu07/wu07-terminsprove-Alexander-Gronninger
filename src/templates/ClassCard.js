import { Link } from "react-router-dom";
import ClassImage from "../components/ClassImage";
import Rating from "../components/Rating";

const ClassCard = ({ image, title, rating, classId }) => {
  classId = 1;
  return (
    <>
      <div className="mr-4">
        <Link to={"/class/" + classId} className="h-fit block">
          <ClassImage image="https://picsum.photos/200" />
          <h3 className="text-small overflow-hidden max-w-[150px] max-h-[26px] truncate">
            Lorem Ipsumssssssssssss
          </h3>
        </Link>
        <Rating rating={rating} />
      </div>
    </>
  );
};

export default ClassCard;
