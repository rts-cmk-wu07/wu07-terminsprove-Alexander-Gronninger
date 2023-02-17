import { useContext, useEffect, useState } from "react";
import UserContext from "../context/UserContext";
import useFetchUser from "../hooks/useFetchUser";

const ClassSignupButton = ({ classContent }) => {
  const { user } = useContext(UserContext);

  // Check if day already taken by another training
  const { content: ScheduleData } = useFetchUser({
    id: user?.userId,
    token: user?.token,
  });
  const currentTrainingDay = classContent?.classDay;
  const checkScheduleConflict = ScheduleData?.classes.some(
    (obj) => obj?.classDay === currentTrainingDay
  );

  // Check if signed up
  const checkIsSignedUp = classContent?.users.some(
    (obj) => obj?.Roster?.userId === user.userId
  );

  const [isSignedUp, setIsSignedUp] = useState(false);

  useEffect(() => {
    setIsSignedUp(checkIsSignedUp);
  }, [checkIsSignedUp]);

  // Action based on above checks
  function handleButtonClick() {
    // Isn't signed up
    !isSignedUp
      ? // Doesn't conflict with other signup
        !checkScheduleConflict
        ? fetch(
            "http://localhost:4000/api/v1/users/" +
              user.userId +
              "/classes/" +
              classContent.id,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${user.token}`,
              },
            }
          )
            .then((response) => response.json())
            .then((response) => {
              setIsSignedUp(true);
              console.log(response);
            })
            .catch((err) => console.error(err))
        : // Signup conflicts, add user feedback
          console.log("cannot sign up, conflict")
      : // Is signed up
        fetch(
          "http://localhost:4000/api/v1/users/" +
            user.userId +
            "/classes/" +
            classContent.id,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${user.token}`,
            },
          }
        )
          .then((response) => response.json())
          .then((response) => {
            setIsSignedUp(false);
            console.log(response);
          })
          .catch((err) => {
            /* API gives syntaxError but it seems to be working fine*/
            setIsSignedUp(false);
            console.error(err);
          });
  }

  return (
    <>
      <button
        onClick={() => {
          handleButtonClick();
        }}
        className="px-4 col-start-2 col-end-3 row-start-1 row-end-3 bg-white rounded-l-2xl w-full h-16 text-normal self-end mb-4"
      >
        {!isSignedUp ? "Sign Up" : "Leave"}
      </button>
    </>
  );
};

export default ClassSignupButton;
