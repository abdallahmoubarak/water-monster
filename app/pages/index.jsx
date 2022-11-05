import SignPage from "@/app/sign";
import Page from "@/app/home";
import Head from "next/head";
import { useCurrentUser } from "@/hooks/useAuth";
import { styles } from "@/utils/styles";
import AnimatedLogo from "@/components/SVG/AnimatedLogo";

export default function Home() {
  const {
    data: currentUser,
    isLoading,
    isFetching,
  } = useCurrentUser({
    enabled: Boolean(
      typeof window !== "undefined" && localStorage.getItem("JWT"),
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

      {isLoading && isFetching ? (
        <div className="fallback">
          <div className="Logo-container">
            <AnimatedLogo />
          </div>
        </div>
      ) : currentUser ? (
        <Page />
      ) : (
        <SignPage />
      )}
      <style jsx>{`
        .fallback {
          ${styles.flexBothcenter};
          background: ${styles.primaryColor};
          height: 100vh;
          width: 100vw;
        }
        .Logo-container {
          max-width: 8rem;
          margin: 0 auto;
        }
      `}</style>
    </>
  );
}
