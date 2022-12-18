import SignPage from "@/app/sign";
import Home from "@/app/home";
import Head from "next/head";
import { useCurrentUser } from "@/hooks/useAuth";
import { styles } from "@/utils/styles";
import AnimatedLogo from "@/components/SVG/AnimatedLogo";
import { useEffect, useState } from "react";
import { client } from "./_app";

export default function Index() {
  const [enabled, setEnabled] = useState(true);
  const { data: currentUser, isLoading } = useCurrentUser({ enabled });

  useEffect(() => setEnabled(Boolean(localStorage.getItem("JWT"))), []);
  useEffect(() => {
    client.setQueryData(["User"], JSON.parse(localStorage.getItem("User")));
  }, []);

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
        <title>Water Monster</title>
      </Head>

      {isLoading && (
        <div className="fallback">
          <div className="logo-container">
            <AnimatedLogo />
          </div>
        </div>
      )}

      {currentUser?.id ? <Home /> : <SignPage />}
      <style jsx>{`
        .fallback {
          ${styles.flexBothcenter};
          background: ${styles.primaryColor};
          height: 100vh;
          width: 100vw;
        }
        .logo-container {
          max-width: 8rem;
          margin: 0 auto;
        }
      `}</style>
    </>
  );
}
