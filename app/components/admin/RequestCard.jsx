import { styles } from "@/utils/styles";
import { dateTimeChanger } from "@/utils/time";
import installation from "@/public/svg/installation.svg";
import Image from "next/image";

export default function ReuestCard({ request }) {
  return (
    <>
      <div className="request-card">
        <div className="request-icon">
          <Image src={installation} alt={""} width={80} />
        </div>
        <div>User Name</div>
        <div>
          <span>Type: </span>
          {request.title}
        </div>
        <div>
          <span>State: </span>
          {request.state}
        </div>

        <div className="request-time">{dateTimeChanger(request.createdAt)}</div>
      </div>
      <style jsx>{`
        .request-card {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          ${styles.flexColumn};
          ${styles.boxshadow};
          ${styles.borderRadiusp3rem};
          width: 10rem;
          padding: 1rem;
          gap: 0.6rem;
        }
        .request-time {
          ${styles.fontSizep8rem};
        }
        .request-icon {
          ${styles.flexBothcenter};
        }
      `}</style>
    </>
  );
}
