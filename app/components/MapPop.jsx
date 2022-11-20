import { styles } from "@/utils/styles";
import { FaRoute } from "react-icons/fa";
import { BsFillChatFill, BsWater } from "react-icons/bs";
import { GiPathDistance } from "react-icons/gi";
import { useRouter } from "next/router";
import getTimeDistance from "@/utils/distance";
import { useState } from "react";
import { client } from "pages/_app";
import { useReserveRequest, useStartFilling } from "@/hooks/useRequest";
import Alert from "./Alert";

export default function Pop({
  container,
  currentLocation,
  setPage,
  setChatUser,
}) {
  const router = useRouter();
  const currentUser = client.getQueryData(["User"]);
  const emptyLevel = (container?.size * (100 - container?.water_level)) / 100;
  const [alertMsg, setAlertMsg] = useState("");
  const [isRequested, setIsRequested] = useState(
    Boolean(container?.requests[0]?.state === "requested"),
  );
  const [isReserved, setIsReserved] = useState(
    Boolean(container?.requests[0]?.state === "reserved"),
  );
  const [isProvider, setIsProvider] = useState(
    Boolean(container?.requests[0]?.provider[0]?.id === currentUser.id),
  );

  const { mutate: reserveRequest } = useReserveRequest();
  const { mutate: startFilling } = useStartFilling();

  const handleReserve = () => {
    reserveRequest({
      provider_id: currentUser.id,
      request_id: container?.requests[0]?.id,
    });
    setIsRequested(true);
    setIsReserved(true);
    setIsProvider(true);
    setAlertMsg("Reserved for you");
  };
  const handleFill = () => {
    startFilling({
      provider_id: currentUser.id,
      request_id: container?.requests[0]?.id,
      empty_level: emptyLevel,
    });
    setIsRequested(false);
    setIsReserved(true);
    setIsProvider(false);
    setAlertMsg("Filling");
  };

  return (
    <>
      <div className="content">
        {Boolean(container?.requests?.length) && (
          <div className="requested">
            {isReserved ? "Reserved" : "Requested"}
          </div>
        )}
        <div>
          <BsWater /> {emptyLevel} liter is empty.
        </div>
        <div>
          <GiPathDistance />{" "}
          {getTimeDistance({
            currentLocation,
            distanceLocation: container?.location,
          })}{" "}
          min.
        </div>
        {(!isReserved || isProvider) && currentUser.type !== "Admin" && (
          <div className="icons-container">
            <div
              className="icon"
              onClick={() => {
                setChatUser(container?.user);
                setPage("Chat");
              }}>
              <BsFillChatFill />
            </div>
            <div
              className="icon"
              onClick={() =>
                router.push(
                  `https://www.google.com/maps/dir/${currentLocation[0]},${currentLocation[1]}/${container?.location.longitude},${container?.location.latitude}/data=!4m2!4m1!3e0`,
                )
              }>
              <FaRoute />
            </div>
            {isReserved ? (
              isProvider && (
                <div className="icon Fill" onClick={handleFill}>
                  Fill
                </div>
              )
            ) : isRequested ? (
              <div className="icon GO" onClick={handleReserve}>
                GO
              </div>
            ) : (
              <div
                className="icon GO"
                onClick={() => setAlertMsg("Contact the client first")}>
                X
              </div>
            )}
          </div>
        )}
      </div>
      <Alert alertMsg={alertMsg} setAlertMsg={setAlertMsg} />

      <style jsx>{`
        .content {
          background: white;
          padding: 0.4rem 0.6rem;
          ${styles.borderRadius1rem};
          ${styles.boxshadow};
          color: ${styles.primaryColor};
          border: 1px solid ${styles.primaryColor};
          font-size: 1rem;
          position: relative;
        }
        .content:before {
          content: "";
          position: absolute;
          top: 100%;
          left: 70px;
          width: 0;
          border-top: 10px solid ${styles.primaryColor};
          border-left: 10px solid transparent;
          border-right: 10px solid transparent;
        }
        .requested {
          color: ${styles.secondaryColor};
        }
        .icons-container {
          ${styles.flexBothcenter};
          gap: 1rem;
          padding-top: 0.5rem;
        }
        .icon {
          ${styles.flexBothcenter};
          ${styles.borderRadius50percent};
          color: white;
          background: ${styles.primaryColor};
          width: 2.6rem;
          height: 2.6rem;
          cursor: pointer;
          font-weight: bold;
          border: 1px solid ${styles.primaryColor};
        }
        .GO {
          background: white;
          color: ${styles.primaryColor};
        }
      `}</style>
    </>
  );
}
