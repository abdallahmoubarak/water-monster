import ContactCard from "@/components/ContactCard";
import { useEffect, useState } from "react";
import { styles } from "@/utils/styles";
import ChatBox from "@/components/ChatBox";
import { useGetAdmin, useGetContacts } from "@/hooks/useUser";
import { useCurrentUser } from "@/hooks/useAuth";
import Button from "@/components/Button";

export default function Contacts({
  setPage,
  chatUser,
  setChatUser,
  onlineUsers,
  socket,
}) {
  const [contacts, setContacts] = useState([]);

  const { data: currentUser } = useCurrentUser({ enabled: false });
  const { data: admin } = useGetAdmin({ enabled: true });
  const { data: users } = useGetContacts({ id: currentUser.id });

  useEffect(() => {
    admin && setContacts(admin);
    admin && setChatUser(admin[0]);
    users && admin && setContacts([...admin, ...users]);
  }, [admin, users]);

  return (
    <>
      <div className="contact-page-container">
        <div className="contacts-wrapper">
          <div className="contacts-container">
            {contacts?.map((contact, i) => (
              <ContactCard
                key={i}
                user={contact}
                setChatUser={setChatUser}
                setPage={setPage}
                onlineUsers={onlineUsers}
              />
            ))}
          </div>
        </div>
        <div className="chat-wrapper">
          <ChatBox user={chatUser} socket={socket} />
        </div>
      </div>
      <style jsx>{`
        .contact-page-container {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          height: inherit;
          gap: 0.3rem;
        }
        .contacts-wrapper {
        }
        .contacts-container {
          ${styles.flexColumn};
          gap: 1rem;
          overflow: auto;
          padding: 1rem;
          height: 100%;
          min-width: 18rem;
        }
        .chat-wrapper {
          padding: 1rem 0rem;
          padding-right: 1rem;
          flex: 1 1;
        }
        @media only screen and (max-width: 46rem) {
          .chat-wrapper {
            display: none;
          }
          .contacts-wrapper {
            flex: 1 1;
          }
        }
      `}</style>
    </>
  );
}
