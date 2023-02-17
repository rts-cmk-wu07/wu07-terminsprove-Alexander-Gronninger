import { Link } from "react-router-dom";
import { IoTriangle } from "react-icons/io5";

const LinkBack = () => {
  return (
    <Link to="/home" className="flex mt-8">
      <IoTriangle
        size="12px"
        className="text-pinkish rotate-[-90deg] mr-2 self-center"
      />
      <p className="text-pinkish">Back</p>
    </Link>
  );
};

export default LinkBack;
