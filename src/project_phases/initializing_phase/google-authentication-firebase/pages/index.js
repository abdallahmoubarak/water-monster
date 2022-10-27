import { signInWithGoogle } from "../firbase";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [profilePic, setProfilePic] = useState();

  useEffect(() => {
    setName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"));
    setProfilePic(localStorage.getItem("profilePic"));
  }, []);
  return (
    <div>
      <h1>Helllooo world</h1>
      {!name && (
        <button
          onClick={() => signInWithGoogle(setName, setEmail, setProfilePic)}
          className={styles.googleBtn}>
          Sign In with google
        </button>
      )}
      <img src={profilePic} alt="" />
      <h1>{name}</h1>
      <h1>{email}</h1>
      {!!name && (
        <div>
          <button
            className={styles.logoutBtn}
            onClick={() => {
              localStorage.removeItem("name");
              localStorage.removeItem("email");
              localStorage.removeItem("profilePic");
              setName("");
              setEmail("");
              setProfilePic("");
            }}>
            Log out
          </button>
        </div>
      )}
    </div>
  );
}
