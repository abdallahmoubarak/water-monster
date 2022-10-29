import styles from "@/styles/chatpage.module.css";
import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import ChatBubbles from "./chatBubbles";

export default function ChatPage() {
  const [value, setValue] = useState("");
  const [messages, setMessages] = useState(msgs);

  return (
    <div className={styles.container}>
      <div className={styles.topBar}>Chat App</div>
      <div className={styles.chatBox}>
        <ChatBubbles messages={messages} />
      </div>
      <div className={styles.chatInputContainer}>
        <input
          className={styles.chatInput}
          placeholder={"Message"}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => {
            e.key === "Enter" &&
              setMessages([...messages, { content: value, owner: true }]);
            e.key === "Enter" && setValue("");
          }}
        />
        <div className={styles.chatIcon}>
          <FaPaperPlane />
        </div>
      </div>
    </div>
  );
}

const msgs = [
  {
    content: "Helloo",
    owner: true,
  },
  {
    content: "Hi",
    owner: false,
  },
];
