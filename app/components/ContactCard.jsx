import Image from "next/image";
import styles from "@/styles/Contact.module.css";
import img from "@/public/icons/icon-256x256.png";

export default function ContactCard({ user, setChatUser, setPage }) {
  return (
    <>
      <div
        className={styles.contactCard}
        onClick={() => {
          setChatUser(user);
          document.body.clientWidth < 736 && setPage("Chat");
        }}>
        <div className={styles.contactImg}>
          <Image src={user?.profile_url || img} alt="" width={48} height={48} />
        </div>
        <div className={styles.contactBody}>
          <div className={styles.middle}>
            <div className={styles.contactTitle}>{user.name}</div>
            <div className={styles.contactText}>{"last message"}</div>
          </div>
          <div>
            <span className={styles.time}>12:19 PM</span>
          </div>
        </div>
      </div>
    </>
  );
}
