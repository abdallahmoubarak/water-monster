import ContactCard from "@/components/ContactCard";
import { useState } from "react";
import img from "@/public/icons/icon-256x256.png";
import { styles } from "@/utils/styles";
import ChatBox from "@/components/ChatBox";

export default function Contacts({ setPage, chatUser, setChatUser }) {
  const [contacts, setContacts] = useState(contx);

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
              />
            ))}
          </div>
        </div>
        <div className="chat-wrapper">
          <ChatBox user={chatUser} />
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
          height: inherit;
          overflow: hidden;
        }
        .contacts-container {
          ${styles.flexColumn};
          gap: 1rem;
          overflow: auto;
          padding: 1rem;
          height: 100%;
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

const contx = [
  { name: "Water Monster", img: img },
  { name: "Water Monster", img: img },
  { name: "Water Monster", img: img },
  { name: "Water Monster", img: img },
  { name: "Water Monster", img: img },
  { name: "Water Monster", img: img },
  { name: "Water Monster", img: img },
  { name: "Water Monster", img: img },
  { name: "Water Monster", img: img },
  { name: "Water Monster", img: img },
  { name: "Ali", img: img },
  { name: "Water Monster ss", img: img },
  { name: "Water Monster Last", img: img },
];
