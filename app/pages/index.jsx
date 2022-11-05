import SignPage from "@/app/sign";
import Page from "@/app/home";
import Head from "next/head";
import { useCurrentUser } from "@/hooks/useAuth";

export default function Home() {
  const { data: currentUser, isLoading } = useCurrentUser({
    enabled: Boolean(
      typeof window !== "undefined" && localStorage.getItem("User"),
    ),
  });

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
      </Head>

      {isLoading ? (
        <div className="fill-back"></div>
      ) : currentUser ? (
        <Page />
      ) : (
        <SignPage />
      )}
    </>
  );
}
