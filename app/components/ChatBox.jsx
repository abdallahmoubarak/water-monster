import { useEffect, useRef, useState } from "react";
import { FaPaperPlane, FaPhone, FaArrowLeft } from "react-icons/fa";
import { styles } from "@/utils/styles";
import Image from "next/image";
import Call from "./Call";
import Message from "./Message";
import { useCreateMessage, useGetMessages } from "@/hooks/useMessage";
import { useCurrentUser } from "@/hooks/useAuth";

export default function ChatBox({ user, setPage, socket }) {
  const inputRef = useRef(null);
  const [messages, setMessages] = useState([]);
  const [value, setValue] = useState("");
  const [call, setCall] = useState(false);

  const { data: currentUser } = useCurrentUser({ enabled: false });
  const { mutate: createMessage } = useCreateMessage();
  const { data: msgs } = useGetMessages({
    me: currentUser?.id,
    other: user?.id,
    enabled: false,
  });

  useEffect(() => msgs && setMessages(msgs), [msgs]);

  useEffect(() => {
    socket?.on(
      "getMessage",
      ({ senderId, content }) =>
        user?.id === senderId &&
        setMessages((messages) => [
          ...messages,
          {
            content,
            createdAt: new Date(),
            from: { id: senderId },
          },
        ]),
    );
  }, [socket, user?.id]);

  const handleSendOnSocket = ({ user, content }) => {
    socket.emit("sendMessage", {
      senderId: currentUser?.id,
      receiverId: user.id,
      content,
    });
  };

  const sendMessage = async () => {
    if (value) {
      createMessage({ content: value, to: user?.id, from: currentUser?.id });
      setMessages([
        ...messages,
        {
          content: value,
          createdAt: new Date(),
          from: { id: currentUser?.id },
        },
      ]);
      handleSendOnSocket({ user, content: value });
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
                {user?.profile_url && (
                  <Image
                    src={user?.profile_url}
                    alt=""
                    width={48}
                    height={48}
                  />
                )}
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
                <Message key={i} message={message} currentUser={currentUser} />
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
              <div className="chat-icon" onClick={sendMessage}>
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
          min-width: 3rem;
          height: 3rem;
          ${styles.borderRadius50percent};
          ${styles.darkProfileBackground};
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
          gap: 0.2rem;
          ${styles.flexColumn};
          ${styles.offWhiteBG}
        }

        .chat-input-container {
          ${styles.flexAligncenter};
          position: relative;
          width: 100%;
          gap: 0.3rem;
          padding: 0.6rem;
          ${styles.offWhiteBG}
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
