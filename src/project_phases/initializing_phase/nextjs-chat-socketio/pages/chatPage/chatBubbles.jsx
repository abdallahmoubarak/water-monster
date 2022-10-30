import styles from "@/styles/chat.module.css";

export default function ({ messages, user }) {
  return (
    <>
      <div className={styles.msgsContainer}>
        {messages?.map((message, i) => (
          <div
            key={i}
            className={`${styles.bubble} ${styles.first} ${
              message?.user === user ? styles.recipient : styles.sender
            }`}>
            <div>{message?.user === user ? "Me" : message?.user}</div>
            <div>{message?.content}</div>
          </div>
        ))}
      </div>
    </>
  );
}
