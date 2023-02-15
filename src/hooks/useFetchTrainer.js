import { useEffect, useState } from "react";

const useFetchTrainer = ({ trainerId }) => {
  const [content, setContent] = useState();

  useEffect(() => {
    trainerId &&
      fetch("http://localhost:4000/api/v1/trainers/" + trainerId + "/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((response) => setContent(response))
        .catch((err) => console.error(err));
    // eslint-disable-next-line
  }, [trainerId]);

  return { content };
};

export default useFetchTrainer;
