import { createContext, useEffect, useState } from "react";
import { getCurrentUser } from "../api/FirebaseAPI";

interface childrenProps {
  children: React.ReactNode;
}

export const userContext = createContext({});

export const UserContextProvider = ({ children }: childrenProps) => {
  const [currentUser, setCurrentUser] = useState<object>({});

  useEffect(() => {
    const handleUnload = () => {
      getCurrentUser(setCurrentUser);
      console.log(currentUser);
    };

    window.addEventListener("unload", handleUnload);
    return () => {
      window.removeEventListener("unload", handleUnload);
    };
  }, [currentUser]);

  const value = {
    currentUser,
    setCurrentUser,
  };

  return <userContext.Provider value={value}>{children}</userContext.Provider>;
};
