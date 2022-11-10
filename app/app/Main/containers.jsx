import Button from "@/components/Button";
import { styles } from "@/utils/styles";
import { useState } from "react";
import RequestInstallation from "@/components/RequestInstallation";
import Container from "@/components/Container";
import { useUserContainers } from "@/hooks/useContainer";
import ContainerLoader from "@/components/ContainerLoader";

export default function Containers({ setPage, currentUser }) {
  const [requestOn, setRequestOn] = useState(false);
  const { data: containers, isLoading } = useUserContainers(currentUser.id);

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
