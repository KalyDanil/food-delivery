import { Auth, User, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

export const useAuthStateChanged = (auth: Auth) => {
  const [user, setUser] = useState<null | User | undefined>(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        return;
      }

      setUser(undefined);
    });
  }, [auth]);

  return user;
};
