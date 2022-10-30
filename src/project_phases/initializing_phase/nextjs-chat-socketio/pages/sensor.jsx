import { useEffect, useState } from "react";
import SocketIOClient from "socket.io-client";

export default function () {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    const socket = SocketIOClient.connect("ws://192.168.0.112:81", {
      path: "/",
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
  console.log(messages);
  return (
    <>
      <h1>Sensor reading</h1>
      {/* <h2>
        {messages.map((message) => (
          <li>{message}</li>
        ))}
      </h2> */}
    </>
  );
}
