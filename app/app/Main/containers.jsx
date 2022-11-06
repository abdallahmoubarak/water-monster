import Button from "@/components/Button";
import Container from "@/components/SVG/Container";
import Image from "next/image";
import settings from "@/public/svg/settings.svg";
import { styles } from "@/utils/styles";
import { useState } from "react";
import RequestInstallation from "@/components/RequestInstallation";
import { useUserContainers } from "@/hooks/useContainer";

export default function Containers({ setPage, currentUser }) {
  const [requestOn, setRequestOn] = useState(false);
  const { data: containers, isLoading } = useUserContainers(currentUser.id);

  return (
    <>
      <div className="page">
        <div className="containers">
          {containers?.map((container, i) => (
            <div key={i} className="container-card">
              <div className="flex">
                <div>{container?.name} Container</div>
                <div className="stng" onClick={() => setPage("Setting")}>
                  <Image width={30} src={settings} alt="s" />
                </div>
              </div>
              <div className="container-container">
                <Container level={container?.level} />
              </div>
              <div className="flex">
                <div>Sensor State</div>
                <div
                  className={`state-led ${
                    container.sensor_state && "led-active"
                  }`}></div>
              </div>
            </div>
          ))}
        </div>

        {requestOn && <RequestInstallation />}

        <div className="new-installation-btn">
          <Button
            text={requestOn ? "Cancel" : "New Installation"}
            dark={true}
            onClick={() => setRequestOn(!requestOn)}
          />
        </div>
      </div>

      <style jsx>{`
        .page {
          padding: 1rem;
        }
        .containers {
          ${styles.flexBothcenter};
          flex-wrap: wrap;
          gap: 1rem;
          padding-bottom: 1rem;
        }
        .container-card {
          border: 1px solid lightgray;
          max-width: 22rem;
          flex: 1 1 22rem;
          padding: 0.4rem 1rem;
          ${styles.borderRadius1rem};
          ${styles.boxshadow};
          ${styles.transitionAll3s};
        }
        .container-card:hover {
          ${styles.boxshadowHover};
          ${styles.transitionAll3s};
        }
        .container-container {
        }
        .flex {
          font-size: 1.4rem;
          ${styles.flexAligncenter};
          ${styles.justifyBetween};
          padding: 0.6rem 0;
        }
        .state-led {
          width: 1.2rem;
          height: 1.2rem;
          ${styles.borderRadius50percent};
          background: ${styles.secondaryColor};
        }
        .led-active {
          background: ${styles.primaryColor};
        }
        .new-installation-btn {
          padding: 2rem 0;
        }

        .stng {
          width: 2rem;
          height: 2rem;
          cursor: pointer;
        }
      `}</style>
    </>
  );
}

const containers = [
  { id: "2", name: "Roof Container", sensor_state: true, level: 80 },
];
