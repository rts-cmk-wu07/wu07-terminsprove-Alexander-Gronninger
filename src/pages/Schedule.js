import { useContext } from "react";
import ClassTime from "../components/ClassTime";
import UserContext from "../context/UserContext";
import useFetchSchedule from "../hooks/useFetchSchedule";

const Schedule = () => {
  const { user, setUser } = useContext(UserContext);

  const { content: ScheduleData } = useFetchSchedule({
    id: user?.userId,
    token: user?.token,
  });
  return (
    <>
      <section className="mt-16">
        {ScheduleData && ScheduleData.classes ? (
          ScheduleData.classes.map((ClassObject, i) => {
            console.log(ClassObject);
            return (
              <div className="mx-4 my-2 border-dashed border-2 border-b-customGray border-t-white border-x-white">
                <ClassTime classContent={ClassObject} key={i} />
              </div>
            );
          })
        ) : (
          <p>Sign up for classes</p>
        )}
      </section>
    </>
  );
};

export default Schedule;
