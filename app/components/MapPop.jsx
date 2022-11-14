import { styles } from "@/utils/styles";
import { FaRoute } from "react-icons/fa";
import { BsFillChatFill } from "react-icons/bs";
import { useRouter } from "next/router";

export default function Pop({ container, current, setPage }) {
  const router = useRouter();
  return (
    <>
      <div className="content">
        {Boolean(container?.requests?.length) && (
          <div className="requested">Filling requested</div>
        )}
        <div>
          {(container?.size * container?.water_level) / 100} liter is empty.
        </div>
        <div className="icons-container">
          <div
            className="icon"
            onClick={() => setPage("Chat", container?.user?.id)}>
            <BsFillChatFill />
          </div>
          <div
            className="icon"
            onClick={() =>
              router.push(
                `https://www.google.com/maps/dir/${current[0]},${current[1]}/${container?.location.longitude},${container?.location.latitude}/data=!4m2!4m1!3e0`,
              )
            }>
            <FaRoute />
          </div>
          <div className="icon GO">GO</div>
        </div>
      </div>

      <style jsx>{`
        .content {
          background: white;
          padding: 0.4rem 0.6rem;
          ${styles.borderRadius1rem};
          ${styles.boxshadow};
          color: ${styles.primaryColor};
          border: 1px solid ${styles.primaryColor};
          font-size: 1rem;
          position: relative;
        }
        .content:before {
          content: "";
          position: absolute;
          top: 100%;
          left: 70px;
          width: 0;
          border-top: 10px solid ${styles.primaryColor};
          border-left: 10px solid transparent;
          border-right: 10px solid transparent;
        }
        .requested {
          color: ${styles.secondaryColor};
        }
        .icons-container {
          ${styles.flexBothcenter};
          gap: 1rem;
          padding-top: 0.5rem;
        }
        .icon {
          ${styles.flexBothcenter};
          ${styles.borderRadius50percent};
          color: white;
          background: ${styles.primaryColor};
          width: 2.6rem;
          height: 2.6rem;
          cursor: pointer;
          font-weight: bold;
          border: 1px solid ${styles.primaryColor};
        }
        .GO {
          background: white;
          color: ${styles.primaryColor};
        }
      `}</style>
    </>
  );
}
