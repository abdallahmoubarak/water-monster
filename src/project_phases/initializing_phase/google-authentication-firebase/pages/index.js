import { signInWithGoogle } from "../firbase";

export default function Home() {
  return (
    <div>
      Helllooo world
      <button onClick={signInWithGoogle}>Sign In with google</button>
    </div>
  );
}
