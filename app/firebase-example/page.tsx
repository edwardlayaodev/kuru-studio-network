"use client";
import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  User,
} from "firebase/auth";
import { auth } from "../_utilities/firebaseConfig";
import { useAtom } from "jotai";
import { userAtom } from "../_data/atoms";
import Atom from "../_components/atoms";

export default function FirebaseExamplePage() {
  const [user, setUser] = useAtom(userAtom);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSignUp = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      // User signed up successfully
    } catch (error: any) {
      setError(error.message);
    }
  };

  const handleSignIn = async () => {
    try {
      const userCredential: any = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      // User signed in successfully
    } catch (error: any) {
      setError(error.message);
    }
  };

  const handleSignOut = async () => {
    try {
      signOut(auth);
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <div>
      <Atom.Visibility state={!user}>
        <h2>Firebase Authentication</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleSignUp}>Sign Up</button>
        <button onClick={handleSignIn}>Sign In</button>
      </Atom.Visibility>

      <Atom.Visibility state={user != null}>
        <h1>
          You are Logged In as:{" "}
          {user?.displayName ? user?.displayName : "No display name set"} with
          the uid: {user?.uid}
        </h1>
        <button onClick={handleSignOut}>Sign Out</button>
      </Atom.Visibility>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
