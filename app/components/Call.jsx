import { styles } from "@/utils/styles";
import { useEffect } from "react";
import { FaPhone } from "react-icons/fa";

export default function Call({
  call,
  setCall,
  user,
  recieve,
  setPage,
  userType,
  socket,
}) {
  const handleAnswer = () => {
    setCall(false);
    userType === "Admin" ? setPage("Admin") : setPage("Contacts");
  };

  const handleDicline = () => {
    setCall(false);
    userType === "Admin" ? setPage("Admin") : setPage("Contacts");
    socket?.emit("disconnectCall", { callerId: user?.id });
  };

  useEffect(() => {
    socket?.on("disCall", ({ callerId }) => {
      console.log(callerId);
      setCall(false);
    });
  }, [socket]);

  return (
    <>
      <div className={`callpage ${call && "inner"}`}>
        <div className="call-head">
          <div className="call-profile-img"></div>

          <div className="target-user-name">{user?.name}</div>

          <div>{!user?.onCall ? "Ringing..." : "00:00"}</div>
        </div>
        {recieve ? (
          <div className="incall">
            <div className="call-icon answer" onClick={handleAnswer}>
              <FaPhone />
            </div>
            <div className="call-icon dicline" onClick={handleDicline}>
              <FaPhone />
            </div>
          </div>
        ) : (
          <div className="call-icon dicline" onClick={() => setCall(false)}>
            <FaPhone />
          </div>
        )}
      </div>

      <style jsx>{`
        .callpage {
          width: 100%;
          height: 100%;
          padding: 2rem;
          position: absolute;
          top: 0;
          left: 0;
          color: white;
          background: ${styles.primaryColor};
          -webkit-clip-path: circle(0% at 95% 5%);
          clip-path: circle(0% at 95% 5%);
          -webkit-transition: -webkit-clip-path 0.5s ease-in-out;
          transition: -webkit-clip-path 0.5s ease-in-out;
          -o-transition: clip-path 0.5s ease-in-out;
          transition: clip-path 0.5s ease-in-out;
          transition: clip-path 0.5s ease-in-out,
            -webkit-clip-path 0.5s ease-in-out;
          z-index: 1;
          ${styles.flexAligncenter};
          ${styles.justifyBetween};
          ${styles.flexColumn}
        }

        .inner {
          -webkit-clip-path: circle(100%);
          clip-path: circle(100%);
          z-index: 14;
        }

        .call-head {
          ${styles.flexAligncenter}
          ${styles.flexColumn};
          gap: 1rem;
        }
        .call-icon {
          font-size: 1.6rem;
          color: ${styles.primaryColor};
          background: white;
          padding: 0.9rem;
          ${styles.borderRadius50percent};
          cursor: pointer;
          ${styles.flexBothcenter};
        }

        .target-user-name {
          font-size: 1.6rem;
        }

        .call-profile-img {
          ${styles.flexJustifycenter};
          ${styles.flexAligncenter}
          width: 7rem;
          height: 7rem;
          border: 3px solid white;
          background: #ddd;
          font-size: 7rem;
          padding-top: 2rem;
          line-height: 0rem;
          overflow: hidden;
          ${styles.borderRadius50percent};
          cursor: pointer;
          ${styles.darkProfileBackground}
        }
        .incall {
          ${styles.flexAligncenter};
          gap: 6rem;
          padding-bottom: 2rem;
        }
        .dicline {
          background: red;
          transform: rotate(-140deg);
          color: white;
        }
        .answer {
          background: green;
          color: white;
        }
      `}</style>
    </>
  );
}
