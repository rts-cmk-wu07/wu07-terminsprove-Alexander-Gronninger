import { useContext } from "react";
import ClassTime from "../components/ClassTime";
import LinkBack from "../components/LinkBack";
import Rating from "../components/Rating";
import Trainer from "../components/Trainer";
import UserContext from "../context/UserContext";
import useFetchClass from "../hooks/useFetchClass";

const ClassDetails = () => {
  const { content: classContent } = useFetchClass();

  const url = classContent && classContent?.asset?.url;

  const { user, setUser } = useContext(UserContext);

  return (
    <>
      <div>
        <section className="grid">
          <div className="col-start-1 col-end-2 row-start-1 row-end-2 overflow-hidden">
            <img
              className="origin-top scale-[2.7]"
              src={url}
              alt={classContent && classContent.className}
            />
          </div>
          <div className="col-start-1 col-end-2 row-start-1 row-end-2 z-20">
            <div className="pt-6 mx-6">
              <LinkBack />
            </div>
            <div className="grid mt-64 mb-2 ml-6">
              <h1 className="text-white text-big col-start-1 col-end-2 max-w-[60vw] truncate whitespace-normal">
                {classContent && classContent.className}
              </h1>
              <div className="mt-2 col-start-1 col-end-2">
                <Rating />
              </div>
              <button className="px-4 col-start-2 col-end-3 row-start-1 row-end-3 bg-white rounded-l-2xl w-full h-16 text-normal self-end mb-4">
                Sign up
              </button>
            </div>
          </div>
        </section>
        <ClassTime classContent={classContent} />
        <div className="mx-6 mt-12 mb-24">
          <Trainer trainerId={classContent && classContent.trainerId} />
        </div>
      </div>
    </>
  );
};

export default ClassDetails;
