"use client";
import { onAuthStateChanged } from "firebase/auth";
import { useAtom } from "jotai";
import { userAtom } from "@/app/_data/atoms";
import { useEffect } from "react";
import { auth } from "@/app/_utilities/firebaseConfig";
import { ReactNode, Fragment as ReactFragment } from "react";

interface IAuthProviderProps {
  children: ReactNode;
}

const AuthStateChangeProvider: React.FunctionComponent<IAuthProviderProps> = ({
  children,
}) => {
  const [user, setUser] = useAtom(userAtom);

  // on mount, listen to firebase auth changes
  useEffect(() => {
    onAuthStateChanged(auth, (user: any) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  return <ReactFragment>{children}</ReactFragment>;
};

export default AuthStateChangeProvider;
