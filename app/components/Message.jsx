import { useCurrentUser } from "@/hooks/useAuth";
import { styles } from "@/utils/styles";
import { timeChanger } from "@/utils/time";

export default function Message({ message }) {
  const { data: currentUser } = useCurrentUser({ enabled: false });

  return (
    <>
      <div
        className={`bubble first ${
          message?.id === currentUser?.id ? "me" : "other"
        }`}>
        <div className="content">{message?.content}</div>
        <div className="time">{timeChanger(message?.createdAt)}</div>
      </div>
      <style jsx>{`
        .bubble {
          ${styles.borderRadius1rem};
          padding: 0.4rem 1rem;
          max-width: 60%;
          ${styles.borderRadius1rem};
        }
        .content {
          padding-bottom: 0.2rem;
        }
        .other {
          align-self: flex-start;
          background-color: #f6f8fa;
          border-top-left-radius: 0.1em;
        }
        .me {
          align-self: flex-end;
          background: #f6f8fa;
          border-top-right-radius: 0.1em;
        }
        .time {
          font-size: 0.7rem;
          color: ${styles.primaryColor};
          text-align: right;
        }
      `}</style>
    </>
  );
}
