import { useState } from "react";
import UserContext from "./UserContext";
import UserRatingContext from "./UserRatingContext";

function ContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [showRatingModal, setShowRatingModal] = useState(false);
  const [ratingId, setRatingId] = useState(null);

  return (
    <UserRatingContext.Provider
      value={{ showRatingModal, setShowRatingModal, ratingId, setRatingId }}
    >
      <UserContext.Provider value={{ user, setUser }}>
        {children}
      </UserContext.Provider>
    </UserRatingContext.Provider>
  );
}

export default ContextProvider;
