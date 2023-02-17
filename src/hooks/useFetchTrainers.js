import { useEffect, useState } from "react";

const useFetchTrainers = () => {
  const [content, setContent] = useState();

  useEffect(() => {
    fetch("http://localhost:4000/api/v1/trainers", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => setContent(response))
      .catch((err) => console.error(err));
    // eslint-disable-next-line
  }, []);

  return { content };
};

export default useFetchTrainers;
