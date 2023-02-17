import { useEffect, useState } from "react";

const useFetchUser = ({ id, token }) => {
  const [content, setContent] = useState();

  useEffect(() => {
    fetch("http://localhost:4000/api/v1/users/" + id, {
      method: "GET",
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

export default useFetchUser;
