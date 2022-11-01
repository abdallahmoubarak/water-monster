import Image from "next/image";
import styles from "@/styles/Contact.module.css";

export default function ContactCard({ user, setChatUser, setPage }) {
  return (
    <>
      <div
        className={styles.contactCard}
        onClick={() => {
          setChatUser(user);
          document.body.clientWidth < 800 && setPage("Chat");
        }}>
        <div className={styles.contactImg}>
          <Image src={user.img} alt="" width={48} height={48} />
        </div>
        <div className={styles.contactBody}>
          <div className={styles.middle}>
            <div className={styles.contactTitle}>{user.name}</div>
            <div className={styles.contactText}>some sended message</div>
          </div>
          <div>
            <span className={styles.time}>12:19 PM</span>
          </div>
        </div>
      </div>
    </>
  );
}
