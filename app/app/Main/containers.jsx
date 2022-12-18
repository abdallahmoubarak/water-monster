import Button from "@/components/Button";
import { styles } from "@/utils/styles";
import { useEffect, useState } from "react";
import RequestInstallation from "@/components/RequestInstallation";
import Container from "@/components/Container";
import { useUserContainers } from "@/hooks/useContainer";
import ContainerLoader from "@/components/ContainerLoader";
import { client } from "pages/_app";
import Alert from "@/components/Alert";

export default function Containers({ setPage }) {
  const currentUser = client.getQueryData(["User"]);
  const [requestOn, setRequestOn] = useState(false);
  const [alertMsg, setAlertMsg] = useState("");

  const { data: containers, isLoading } = useUserContainers(currentUser.id);
  useEffect(() => {
    client.setQueryData(
      ["Containers"],
      JSON.parse(localStorage.getItem("Containers") || "[{}]"),
    );
  }, []);

  return (
    <>
      <div className="page">
        {isLoading && <ContainerLoader />}
        <div className="containers">
          {containers?.map((container, i) => (
            <Container key={i} container={container} setPage={setPage} />
          ))}
        </div>

        {requestOn && (
          <RequestInstallation
            currentUser={currentUser}
            close={() => setRequestOn(false)}
            setAlertMsg={setAlertMsg}
          />
        )}

        <div className="new-installation-btn">
          <Button
            text={requestOn ? "Cancel" : "New Installation"}
            dark={true}
            onClick={() => setRequestOn(!requestOn)}
          />
        </div>
      </div>

      <Alert alertMsg={alertMsg} setAlertMsg={setAlertMsg} />

      <style jsx>{`
        .page {
          padding: 0.8rem;
        }
        .containers {
          ${styles.flexBothcenter};
          flex-wrap: wrap;
          gap: 1rem;
          padding-bottom: 1rem;
        }
        .new-installation-btn {
          padding: 2rem 0;
        }
      `}</style>
    </>
  );
}
