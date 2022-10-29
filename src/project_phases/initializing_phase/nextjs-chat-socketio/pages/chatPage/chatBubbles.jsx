import styles from "@/styles/chat.module.css";

export default function ({ messages }) {
  return (
    <>
      {messages?.map((message, i) => (
        <div
          key={i}
          className={`${styles.bubble} ${styles.first} ${
            message.owner ? styles.recipient : styles.sender
          }`}>
          {message.content}
        </div>
      ))}
    </>
  );
}
