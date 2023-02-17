import { useContext } from "react";
import { Link } from "react-router-dom";
import ClassTime from "../components/ClassTime";
import UserContext from "../context/UserContext";
import useFetchUser from "../hooks/useFetchUser";

const Schedule = () => {
  const { user } = useContext(UserContext);

  const { content: ScheduleData } = useFetchUser({
    id: user?.userId,
    token: user?.token,
  });

  return (
    <>
      <section className="mt-16">
        {ScheduleData && ScheduleData.classes && ScheduleData.classes[0] ? (
          ScheduleData.classes.map((ClassObject, i) => {
            return (
              <div className="mx-4 my-2 border-dashed border-2 border-b-customGray border-t-white border-x-white">
                <Link to={"../class/" + ClassObject.id}>
                  <ClassTime classContent={ClassObject} key={i} />
                </Link>
              </div>
            );
          })
        ) : (
          <div className="flex flex-col place-items-center">
            <p className="text-small text-center mb-4">
              You're not signed up for any classes
            </p>
            <Link to="../search" className="text-normal ">
              Click to sign up for classes
            </Link>
          </div>
        )}
      </section>
    </>
  );
};

export default Schedule;
