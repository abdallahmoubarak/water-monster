import { styles } from "@/utils/styles";
import { timeChanger } from "@/utils/time";

export default function Message({ message, user }) {
  return (
    <>
      <div
        className={`bubble first ${
          message.from === user.id ? "sender" : "recipient"
        }`}>
        <div>{message?.user === user ? "Me" : message?.user}</div>
        <div>{message?.content}</div>
        <div className="time">{timeChanger(message?.createdAt)}</div>
      </div>
      <style jsx>{`
        .bubble {
          border-radius: 1em;
          padding: 0.25em 0.75em;
          margin: 0.0625em;
          max-width: 50%;
          ${styles.borderRadius1rem};
        }
        .sender {
          align-self: flex-start;
          background-color: cornflowerblue;
          color: #fff;
          border-top-left-radius: 0.1em;
        }
        .recipient {
          align-self: flex-end;
          background: #f6f8fa;
          border-top-right-radius: 0.1em;
        }
        .time {
          ${styles.fontSizep8rem};
          color: gray;
        }
      `}</style>
    </>
  );
}
