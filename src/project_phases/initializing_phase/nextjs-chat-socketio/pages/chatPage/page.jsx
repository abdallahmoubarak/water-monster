import styles from "@/styles/chatpage.module.css";
import { useEffect, useRef, useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import ChatBubbles from "./chatBubbles";
import SocketIOClient from "socket.io-client";

const user = "User_" + String(new Date().getTime());

export default function ChatPage() {
  const inputRef = useRef(null);
  const [connected, setConnected] = useState(false);
  const [value, setValue] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const socket = SocketIOClient.connect(process.env.BASE_URL, {
      path: "/api/socketio",
    });

    socket.on("connect", () => {
      console.log("SOCKET CONNECTED!", socket.id);
      setConnected(true);
    });

    socket.on("message", (message) => {
      messages.push(message);
      setMessages([...messages]);
    });

    if (socket) return () => socket.disconnect();
  }, []);

  const sendMessage = async () => {
    if (value) {
      const message = { content: value, user };
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(message),
      });
      res.ok && setValue("");
    }
    inputRef?.current?.focus();
  };

  return (
    <div className={styles.container}>
      <div className={styles.topBar}>Chat App</div>
      <div className={styles.chatBox}>
        <ChatBubbles messages={messages} user={user} />
      </div>
      <div className={styles.chatInputContainer}>
        <input
          className={styles.chatInput}
          placeholder={connected ? "Message..." : "Connecting..."}
          value={value}
          disabled={!connected}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <div
          className={styles.chatIcon}
          onClick={sendMessage}
          disabled={!connected}>
          <FaPaperPlane />
        </div>
      </div>
    </div>
  );
}
