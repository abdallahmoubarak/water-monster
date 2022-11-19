import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { client } from "pages/_app";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_GOOGLE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_GOOGLE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_GOOGLE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_GOOGLE_MESSAGEING_SENDER,
  appId: process.env.NEXT_PUBLIC_GOOGLE_APP_ID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();

export const signInWithGoogle = (setName, setEmail, setProfilePic) => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.idToken;
      localStorage.setItem("JWT", token);
      client.setQueryData(["User"], {
        id: result.user.uid,
        name: result.user.displayName,
        email: result.user.email,
        profile_url: result.user.photoURL,
      });
    })
    .catch((error) => {
      console.log(error);
    });
};
export default provider;
