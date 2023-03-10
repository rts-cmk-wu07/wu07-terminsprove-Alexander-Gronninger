import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import UserContext from "../context/UserContext";
import UserRatingContext from "../context/UserRatingContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RatingModal = ({ classId }) => {
  const { user } = useContext(UserContext);
  const { showRatingModal, setShowRatingModal, ratingId } =
    useContext(UserRatingContext);

  let squareStyle = "w-5 h-5 ";

  const [selectedRating, setSelectedRating] = useState(0);

  let navigate = useNavigate();
  let location = useLocation();

  useEffect(() => {
    setSelectedRating(0);
  }, [showRatingModal]);

  return (
    <>
      {showRatingModal && (
        <div
          className="fixed top-0 left-0 h-screen w-screen bg-[#00000050] z-[100]"
          onClick={(e) => {
            if (e.target.classList.contains("fixed")) {
              setShowRatingModal(false);
            }
          }}
        >
          <section className="flex flex-col place-content-center gap-4 place-items-center bg-white px-8 w-fit py-4 m-auto rounded-xl border-2 border-customGray drop-shadow-2xl mt-[30vh] z-[100]">
            <p className="text-small pt-4 w-fit">Click to rate</p>
            <div className="flex gap-[1px] pt-4 w-fit">
              {[...Array(5)].map((_, index) => (
                <div
                  onClick={() => {
                    setSelectedRating(index + 1);
                  }}
                  key={index}
                  className={
                    index < selectedRating
                      ? squareStyle + "bg-pinkish"
                      : squareStyle + "bg-customGray"
                  }
                ></div>
              ))}
            </div>
            <button
              onClick={() => {
                const id = toast.loading("Submitting rating...", {
                  position: "top-center",
                  autoClose: 2500,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                });
                fetch(
                  "http://localhost:4000/api/v1/classes/" +
                    ratingId +
                    "/ratings",
                  {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                      Authorization: `Bearer ${user.token}`,
                    },
                    body: JSON.stringify({
                      userId: user.userId,
                      rating: selectedRating,
                    }),
                  }
                )
                  .then((response) => response.json())
                  .then((response) => {
                    toast.update(id, {
                      render: "Successfully submitted rating",
                      type: "success",
                      isLoading: false,
                      autoClose: 2500,
                    });
                    console.log(response);
                    setShowRatingModal(false);
                    navigate(location.pathname);
                  })
                  .catch((err) => {
                    toast.update(id, {
                      render:
                        "Could not submit rating, this could be caused by the server being down, or that you've already rated this class and the API doesn't support updating(call manager to complain)",
                      type: "error",
                      isLoading: false,
                      autoClose: 10000,
                    });
                    console.error(err);
                  });
              }}
              className="text-small pt-4 w-fit"
            >
              Submit Rating
            </button>
          </section>
        </div>
      )}
    </>
  );
};

export default RatingModal;
