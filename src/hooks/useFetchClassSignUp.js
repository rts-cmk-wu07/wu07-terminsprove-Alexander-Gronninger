import { useEffect, useState } from "react";

const useFetchClassSignUp = ({ id, token, classId }) => {
  const [content, setContent] = useState();

  useEffect(() => {
    fetch("http://localhost:4000/api/v1/users/" + id + "/classes/" + classId, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((response) => setContent(response))
      .catch((err) => console.error(err));
    // eslint-disable-next-line
  }, []);

  return { content };
};

export default useFetchClassSignUp;
