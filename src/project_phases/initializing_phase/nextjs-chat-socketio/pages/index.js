import styles from "../styles/Home.module.css";
import { FaPaperPlane } from "react-icons/fa";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.topBar}>Chat App</div>
      <div className={styles.chatBox}></div>
      <div className={styles.chatInputContainer}>
        <input className={styles.chatInput} placeholder={"Message"} />
        <div className={styles.chatIcon}>
          <FaPaperPlane />
        </div>
      </div>
    </div>
  );
}
