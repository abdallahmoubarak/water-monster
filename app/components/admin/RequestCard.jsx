import { styles } from "@/utils/styles";
import { dateTimeChanger } from "@/utils/time";
import installation from "@/public/svg/installation.svg";
import Image from "next/image";
import Button from "../Button";
import { useAcceptRequest } from "@/hooks/useRequest";
import { FaCheckCircle } from "react-icons/fa";

export default function ReuestCard({ request }) {
  const { mutate: acceptRequest } = useAcceptRequest();
  const currentIndex = indxs.installationIndxs.indexOf(request?.state);
  return (
    <>
      <div className="request-card">
        <div className="request-header">
          <div>
            {request?.title} <span>request</span>
          </div>
          <div className="request-time">
            {dateTimeChanger(request?.createdAt)}
          </div>
        </div>
        <div className="request-body">
          <div className="request-icon">
            <Image src={installation} alt={""} width={80} />
          </div>
          <div className="request-info">
            <div className="request-creator">{request?.creator?.name}</div>

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
        <div className="request-footer">
          {processSteps.installation.map((step, i) => (
            <div className="step" key={i}>
              <div
                className={`step-circule ${i < currentIndex && "step-active"}`}>
                {i}
              </div>
              <div>{step}</div>
            </div>
          ))}
        </div>
        <div className="request-action btn-container">
          {request?.state === "done" ? (
            <div className="done">
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
      </div>
      <style jsx>{`
        .request-card {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          ${styles.flexColumn};
          ${styles.boxshadow};
          ${styles.borderRadiusp3rem};
          width: 22rem;
          ${styles.userSelect};
          gap: 1rem;
        }
        .request-header {
          ${styles.fontSize1p2rem}
          border-bottom: 1px solid lightgray;
          padding: 0.6rem 1rem;
        }
        .request-body {
          ${styles.flexAligncenter};
          padding: 0rem 0.6rem;
        }
        .request-info {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          ${styles.flexColumn};
          gap: 0.3rem;
        }
        .request-icon {
          ${styles.flexBothcenter};
        }
        .request-creator {
          ${styles.fontSize1p2rem}
        }
        .request-time {
          ${styles.fontSizep8rem};
          color: ${styles.primaryColor};
        }
        .request-footer {
          ${styles.flexBothcenter};
          ${styles.fontSizep8rem};
          gap: 1.6rem;
          border-top: 1px solid lightgray;
          padding: 0.6rem 1rem;
          padding-bottom: 0rem;
        }
        .request-action {
          padding-bottom: 0.6rem;
          height: 4rem;
          ${styles.flexBothcenter};
        }
        .step {
          ${styles.flexBothcenter};
          ${styles.flexColumn};
          gap: 0.3rem;
        }
        .step-circule {
          border: 1px dashed gray;
          ${styles.borderRadius50percent};
          width: 2rem;
          height: 2rem;
          ${styles.flexBothcenter}
        }
        .step-active {
          background: ${styles.primaryColor};
          color: white;
          border: 1px dashed ${styles.primaryColor};
        }
        .btn-container {
          ${styles.flexAligncenter};
        }
        .done {
          ${styles.flexAligncenter};
          gap: 0.4rem;
          color: green;
          font-weight: bold;
          ${styles.fontSize1p2rem}
        }
      `}</style>
    </>
  );
}

const processSteps = {
  filling: ["Requested", "Approved", "Filled"],
  installation: ["Requested", "Approved", "Installed"],
};

const indxs = {
  installationIndxs: ["requested", "approval", "installation", "done"],
};
