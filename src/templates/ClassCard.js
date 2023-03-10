import { Link } from "react-router-dom";
import ClassImage from "../components/ClassImage";
import Rating from "../components/Rating";

const ClassCard = ({ image, title, classId }) => {
  return (
    <>
      <div className="mr-4">
        <Link to={"/class/" + classId} className="h-fit block">
          <ClassImage image={image} imageAlt={title} />
          <h3 className="text-small overflow-hidden max-w-[150px] max-h-[26px] truncate">
            {title}
          </h3>
        </Link>
        <Rating classId={classId} />
      </div>
    </>
  );
};

export default ClassCard;
