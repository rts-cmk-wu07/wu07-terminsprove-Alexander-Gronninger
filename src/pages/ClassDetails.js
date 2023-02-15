import { useLocation } from "react-router";
import LinkBack from "../components/LinkBack";
import Rating from "../components/Rating";
import Trainer from "../components/Trainer";

const ClassDetails = () => {
  const location = useLocation();
  return (
    <>
      <div>
        <section className="bg-[url('./backgrounds/welcome_background.jpg')] bg-cover bg-no-repeat bg-top pb-4">
          <div className="pt-6 mx-6">
            <LinkBack />
          </div>
          <div className="grid mt-64 mb-2 ml-6">
            <h1 className="text-white text-big col-start-1 col-end-2 max-w-[60vw] truncate whitespace-normal">
              Lorem Ipsumsssssssss
            </h1>
            <div className="mt-2 col-start-1 col-end-2">
              <Rating />
            </div>
            <button className="px-4 col-start-2 col-end-3 row-start-1 row-end-3 bg-white rounded-l-2xl w-full h-16 text-normal self-end mb-4">
              Sign up
            </button>
          </div>
        </section>
        <section className="mx-6 mt-4 mb-12">
          <h2 className="text-normal">Schedule</h2>
          <div className="flex text-small justify-between">
            <p>Monday</p>
            <p>19:30</p>
          </div>
          <p className="text-small mt-6">
            We learn a few easy yoga position for a better posture and
            well-being.
          </p>
        </section>
        <div className="mx-6 mt-12 mb-24">
          <Trainer />
        </div>
      </div>
    </>
  );
};

export default ClassDetails;
