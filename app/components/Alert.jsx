import { styles } from "@/utils/styles";
import { useEffect } from "react";

export default function Alert({ alertMsg, setAlertMsg }) {
  useEffect(() => {
    const clearMessage = setTimeout(() => {
      setAlertMsg(false);
    }, 3000);
    return () => clearTimeout(clearMessage);
  }, [alertMsg, setAlertMsg]);

  return (
    <>
      <div className={`alert-msg-container ${!alertMsg && "hide"}`}>
        <div className="alert-msg">{alertMsg}</div>
      </div>
      <style jsx>{`
        .alert-msg-container {
          position: relative;
          width: 100%;
          ${styles.flexJustifycenter};
        }
        .alert-msg {
          width: 70vw;
          position: fixed;
          padding: 0.6rem;
          text-align: center;
          top: 4rem;
          margin: auto;
          color: #fff;
          z-index: 300;
          opacity: 0.95;
          background: gray;
          border-radius: 10rem;
          -webkit-border-radius: 10rem;
          -moz-border-radius: 10rem;
          -ms-border-radius: 10rem;
          -o-border-radius: 10rem;
          ${styles.fontSize1p2rem};
          ${styles.boxshadow};
          ${styles.transitionAll3s};
        }
        .hide {
          opacity: 0;
          z-index: -1;
          ${styles.transitionAll3s}
        }
      `}</style>
    </>
  );
}
