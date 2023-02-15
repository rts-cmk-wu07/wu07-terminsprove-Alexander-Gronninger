import { useEffect, useState } from "react";
import { useParams } from "react-router";

const useFetchClass = () => {
  const [content, setContent] = useState();
  const { id } = useParams();

  useEffect(() => {
    fetch("http://localhost:4000/api/v1/classes/" + id, {
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

export default useFetchClass;
