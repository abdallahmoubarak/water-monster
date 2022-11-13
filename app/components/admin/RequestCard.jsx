import { styles } from "@/utils/styles";
import { dateTimeChanger } from "@/utils/time";
import installation from "@/public/svg/installation.svg";
import Image from "next/image";

export default function ReuestCard({ request }) {
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
          <div>requested</div>
          <div>approved</div>
          <div>installed</div>
          <div>done</div>
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
          width: 20rem;
          padding: 0.6rem 1rem;
          ${styles.userSelect};
          cursor: pointer;
          gap: 1rem;
        }
        .request-header {
          ${styles.fontSize1p2rem}
        }
        .request-body {
          ${styles.flexAligncenter}
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
        }
        .request-footer {
          ${styles.flexAligncenter};
          ${styles.justifyBetween};
          ${styles.fontSizep8rem};
          gap: 0.2rem;
        }
      `}</style>
    </>
  );
}
