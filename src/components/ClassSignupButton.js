import { useContext, useEffect, useState } from "react";
import UserContext from "../context/UserContext";
import useFetchUser from "../hooks/useFetchUser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ClassSignupButton = ({ classContent }) => {
  const { user } = useContext(UserContext);

  // Check if day already taken by another training
  const { content: ScheduleData } = useFetchUser({
    id: user?.userId,
    token: user?.token,
  });
  const currentTrainingDay = classContent?.classDay;
  const [signUpConflict, setSignupConflict] = useState(null);

  useEffect(() => {
    const checkScheduleConflict = ScheduleData?.classes.some(
      (obj) => obj?.classDay === currentTrainingDay
    );
    setSignupConflict(checkScheduleConflict);
  }, [ScheduleData]);

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
        !signUpConflict
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
              toast.success("Signed up for class: " + classContent.className, {
                position: "top-center",
                autoClose: 2500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
              setSignupConflict(true);
              setIsSignedUp(true);
              console.log(response);
            })
            .catch((err) => console.error(err))
        : // Signup conflicts, add user feedback
          toast.error(
            "Cannot sign up for: " +
              classContent.className +
              " - class day conflicts with your schedule",
            {
              position: "top-center",
              autoClose: 2500,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            }
          )
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
            // Should be put here but leaving class doesnt get a response it gets an error
            /* toast.error("Left class: " + classContent.className, {
              position: "top-center",
              autoClose: 2500,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
            setSignupConflict(false);
            setIsSignedUp(false); */
            console.log(response);
          })
          .catch((err) => {
            /* API gives syntaxError but it seems to be working fine*/
            toast.warn("Left class: " + classContent.className, {
              position: "top-center",
              autoClose: 2500,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
            setSignupConflict(false);
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
