import { Link } from "react-router-dom";
import ClassImage from "./ClassImage";

const SearchCard = ({ data }) => {
  console.log(data);
  return (
    <>
      <Link to={data.className ? "../class/" + data.id : ""}>
        <div className="flex">
          <div className="h-[150px] w-[150px]">
            <ClassImage
              image={data.asset.url}
              alt={data.className ? data.className : data.trainerName}
              // while using important should be avoided, this solution was quick
              // further time allotment is needed for better solution
              optionalCss={data.trainerName && " !scale-[1]"}
            />
          </div>
          <div className="text-small mt-4 ml-4 flex flex-col gap-2">
            <p className="text-normal">
              {data.className ? data.className : data.trainerName}
            </p>
            <p>{data.className ? data.classDescription : "Trainer"}</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default SearchCard;
