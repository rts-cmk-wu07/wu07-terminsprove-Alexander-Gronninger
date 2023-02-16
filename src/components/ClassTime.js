import { useLocation } from "react-router";

const ClassTime = ({ classContent }) => {
  const location = useLocation();
  console.log(location.pathname);

  return (
    <section
      className={location.pathname !== "/schedule" ? "x-6 mt-4 mb-12" : "my-2"}
    >
      {location.pathname !== "/schedule" && (
        <h2 className="text-normal">Schedule</h2>
      )}
      <div className="flex text-small justify-between">
        <p>{classContent && classContent.classDay}</p>
        <p>{classContent && classContent.classTime}</p>
      </div>
      <p
        className={
          location.pathname !== "/schedule"
            ? "text-small mt-4"
            : "text-normal mt-4 "
        }
      >
        {classContent && location.pathname !== "/schedule"
          ? classContent.classDescription
          : classContent.className}
      </p>
    </section>
  );
};

export default ClassTime;
