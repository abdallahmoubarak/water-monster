import Image from "next/image";
import styles from "@/styles/Contact.module.css";
import { useGetMessages } from "@/hooks/useMessage";
import { useEffect, useState } from "react";
import { timeChanger } from "@/utils/time";
import { client } from "pages/_app";

export default function ContactCard({
  user,
  setChatUser,
  setPage,
  onlineUsers,
}) {
  const currentUser = client.getQueryData(["User"]);
  const [lastmsg, setLastMsg] = useState("last message");

  const { data: msgs } = useGetMessages({
    me: currentUser?.id,
    other: user.id,
    enabled: Boolean(currentUser?.id) && Boolean(user.id),
  });

  useEffect(() => {
    msgs && setLastMsg(msgs[msgs.length - 1]);
  }, [msgs]);

  return (
    <>
      <div
        className={styles.contactCard}
        onClick={() => {
          setChatUser(user);
          document.body.clientWidth < 736 && setPage("Chat");
        }}>
        <div className={styles.contactImg}>
          {user?.profile_url && (
            <Image src={user?.profile_url} alt="" width={48} height={48} />
          )}
        </div>
        <div className={styles.contactBody}>
          <div className={styles.middle}>
            <div className={styles.contactName}>{user?.name}</div>
            <div className={styles.contactText}>{lastmsg?.content}</div>
          </div>
          <div className={styles.time}>
            <div>
              {!!onlineUsers?.filter((u) => u?.userId === user?.id)[0]
                ? "Online"
                : "Offline"}
            </div>
            <div className={styles.lastmsg}>
              {lastmsg?.createdAt && timeChanger(lastmsg?.createdAt)}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
