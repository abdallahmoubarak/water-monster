import styles from "@/styles/RequestCard.module.css";
import { dateTimeChanger } from "@/utils/time";
import installation from "@/public/svg/installation.svg";
import filling from "@/public/svg/filling-request.svg";
import Image from "next/image";
import Button from "../Button";
import { useAcceptRequest } from "@/hooks/useRequest";
import { FaCheckCircle } from "react-icons/fa";

export default function ReuestCard({ request }) {
  const { mutate: acceptRequest } = useAcceptRequest();
  return (
    <>
      <div className={styles.requestCard}>
        <div className={styles.requestHeader}>
          <div>
            {request?.title} <span>request</span>
          </div>
          <div className={styles.requestTime}>
            {dateTimeChanger(request?.createdAt)}
          </div>
        </div>

        <div className={styles.requestBody}>
          {request?.title === "Installation" && (
            <Installation request={request} acceptRequest={acceptRequest} />
          )}
          {request?.title === "Filling" && <Filling request={request} />}
        </div>
      </div>
    </>
  );
}

const Installation = ({ request, acceptRequest }) => {
  const currentIndex = indxs.installationIndxs.indexOf(request?.state);
  return (
    <>
      <div className={styles.requestIconInfo}>
        <div className={styles.requestIcon}>
          <Image src={installation} alt={""} width={80} />
        </div>
        <div className={styles.requestInfo}>
          <div className={styles.requestCreator}>{request?.creator?.name}</div>

          <div>
            <span>Waiting: </span>
            {request?.state}
          </div>
          <div>
            <span>Prefered date: </span>
            {request?.date}
          </div>
        </div>
      </div>
      <div className={styles.requestSteps}>
        {processSteps.installation.map((step, i) => (
          <div className={styles.step} key={i}>
            <div
              className={
                i < currentIndex ? styles.stepActive : styles.stepCircule
              }>
              {i}
            </div>
            <div>{step}</div>
          </div>
        ))}
      </div>
      <div className={styles.requestAction}>
        {request?.state === "done" ? (
          <div className={styles.done}>
            <FaCheckCircle />
            <span>Done</span>
          </div>
        ) : (
          <>
            <Button
              text="Reject"
              dark={true}
              onClick={() =>
                acceptRequest({
                  id: request?.id,
                  state: "rejected",
                })
              }
            />
            <Button
              text="Accept"
              onClick={() =>
                acceptRequest({
                  id: request?.id,
                  state: indxs.installationIndxs[currentIndex + 1],
                })
              }
            />
          </>
        )}
      </div>
    </>
  );
};

const Filling = ({ request }) => {
  const currentIndex = indxs.fillingIndxs.indexOf(request?.state);
  return (
    <>
      <div className={styles.requestIconInfo}>
        <div className={styles.requestIcon}>
          <Image src={filling} alt={""} width={80} />
        </div>
        <div className={styles.requestInfo}>
          <div className={styles.requestCreator}>{request?.creator?.name}</div>

          <div>
            <span>Waiting: </span>
            {request?.state}
          </div>
          <div>
            <span>Provider: </span>
            {request?.date}
          </div>
        </div>
      </div>
      <div className={styles.requestSteps}>
        {processSteps.filling.map((step, i) => (
          <div className={styles.step} key={i}>
            <div
              className={
                i < currentIndex ? styles.stepActive : styles.stepCircule
              }>
              {i}
            </div>
            <div>{step}</div>
          </div>
        ))}
      </div>
      <div className={styles.requestAction}></div>
    </>
  );
};

const processSteps = {
  installation: ["Requested", "Approved", "Installed"],
  filling: ["Requested", "Reserved", "Filled"],
};

const indxs = {
  installationIndxs: ["requested", "approval", "installation", "done"],
  fillingIndxs: ["requested", "waiting", "reserved", "done"],
};
