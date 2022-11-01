import SignPage from "@/app/sign";
import Page from "@/app/home";
import Head from "next/head";
import { useCurrentUser } from "@/hooks/useAuth";
import { useEffect, useState } from "react";

export default function Home() {
  const [enabled, setEnabled] = useState(true);
  const { data: currentUser, isLoading } = useCurrentUser({ enabled });

  useEffect(() => {
    setEnabled(Boolean(localStorage.getItem("JWT")));
  });

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
      </Head>

      {isLoading && <div className="fill-back"></div>}
      {currentUser ? <Page /> : <SignPage />}
    </>
  );
}
