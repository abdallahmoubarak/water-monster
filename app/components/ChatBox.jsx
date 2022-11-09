import { styles } from "@/utils/styles";
import Image from "next/image";
import { FaPaperPlane, FaPhone, FaArrowLeft } from "react-icons/fa";
import { useRef, useState } from "react";
import Call from "./Call";
import img from "@/public/icons/icon-256x256.png";

export default function ChatBox({ user, setPage }) {
  const inputRef = useRef(null);
  const [connected, setConnected] = useState(false);
  const [messages, setMessages] = useState([]);
  const [value, setValue] = useState("");
  const [call, setCall] = useState(false);

  const sendMessage = async () => {
    if (value) {
      setMessages([...messages, { content: value }]);
      // const message = { content: value, user };
      // const res = await fetch("/api/chat", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(message),
      // });
      // res.ok && setValue("");
      setValue("");
    }
    inputRef?.current?.focus();
  };

  return (
    <>
      <div className="chat-container">
        <Call call={call} setCall={setCall} user={user} />
        {!call && (
          <div className="chat-page">
            <div className="chat-head">
              {setPage && (
                <div className="head-icon" onClick={() => setPage("Contacts")}>
                  <FaArrowLeft />
                </div>
              )}
              <div className="profile-img">
                <Image
                  src={user?.profile_url || img}
                  alt=""
                  width={48}
                  height={48}
                />
              </div>
              <div className="user-info">
                <div className="user-name">{user?.name}</div>
                <div className="head-icon" onClick={() => setCall(true)}>
                  <FaPhone />
                </div>
              </div>
            </div>
            <div className="chat-body">
              {messages?.map((message, i) => (
                <div key={i}>{message.content}</div>
              ))}
            </div>
            <div className="chat-input-container">
              <input
                ref={inputRef}
                autoComplete="none"
                className="chat-input"
                placeholder="Message"
                onChange={(e) => setValue(e.target.value)}
                value={value}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              />
              <div
                className="chat-icon"
                onClick={sendMessage}
                disabled={!connected}>
                <FaPaperPlane />
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .chat-container {
          height: 100%;
          box-shadow: 0px 0px 10px lightgray;
          ${styles.borderRadius1rem};
          position: relative;
          overflow: hidden;
        }
        .chat-page {
          ${styles.flexColumn};
          gap: 0.6rem;
          height: 100%;
        }

        .chat-head {
          ${styles.flexAligncenter};
          ${styles.userSelect};
          width: 100%;
          gap: 0.6rem;
          background: ${styles.primaryColor};
          color: white;
          padding: 0.6rem;
        }
        .profile-img {
          ${styles.flexBothcenter};
          background: ${styles.primaryColor};
          min-width: 3rem;
          height: 3rem;
          ${styles.borderRadius50percent};
          border: 3px solid white;
        }

        .user-info {
          ${styles.flexAligncenter};
          ${styles.justifyBetween};
          gap: 0.5rem;
          width: 100%;
        }
        .user-name {
          ${styles.fontSize1p2rem};
        }

        .chat-body {
          width: 100%;
          overflow-y: auto;
          flex: 1 1 100%;
          padding: 0.6rem;
          gap: 0.5rem;
          ${styles.flexColumn};
        }

        .chat-input-container {
          ${styles.flexAligncenter};
          position: relative;
          width: 100%;
          gap: 0.3rem;
          padding: 0.6rem;
        }

        .chat-input {
          width: 100%;
          ${styles.fontSize1p2rem};
          padding: 0.6rem 1rem;
          border: 1px solid gray;
          flex: 1 1 100%;
          outline: none;
          ${styles.borderRadius1rem};
        }
        .chat-icon {
          min-width: 2.6rem;
          height: 2.6rem;
          background: ${styles.primaryColor};
          color: white;
          font-size: 1.3rem;
          ${styles.flexBothcenter};
          ${styles.borderRadius50percent};
          cursor: pointer;
        }
        .head-icon {
          font-size: 1.3rem;
          color: white;
          padding: 0.6rem;
          cursor: pointer;
          ${styles.flexBothcenter};
        }

        .msg-container {
          background: #e4f0f5;
          padding: 0.6rem;
          max-width: 80%;
          min-width: 60%;
          width: fit-content;
          padding-bottom: 0.8rem;
          border-radius: 0.4rem;
          overflow-wrap: break-word;
          -webkit-hyphens: manual;
          -ms-hyphens: manual;
          hyphens: manual;
          position: relative;
          border: 1px solid #eee;
        }

        .me {
          background: #f5ffe4;
          align-self: flex-end;
        }

        .msg-time {
          ${styles.fontSizep8rem};
          color: gray;
          position: absolute;
          bottom: 0rem;
          right: 0.3rem;
        }
        @media only screen and (max-width: 46rem) {
          .chat-container {
            border-radius: 0rem;
            -webkit-border-radius: 0rem;
            -moz-border-radius: 0rem;
            -ms-border-radius: 0rem;
            -o-border-radius: 0rem;
          }
        }
      `}</style>
    </>
  );
}
