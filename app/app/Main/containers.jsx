import Button from "@/components/Button";
import Container from "@/components/SVG/Container";
import Image from "next/image";
import settings from "@/public/svg/settings.svg";
import { styles } from "@/utils/styles";
import { useState } from "react";
import RequestInstallation from "@/components/RequestInstallation";

export default function Containers() {
  const [request, setRequest] = useState();
  const [requestOn, setRequestOn] = useState(false);

  return (
    <>
      <div className="containers">
        {containers?.map((container, i) => (
          <div key={i} className="container-card">
            <div className="flex">
              <div>{container.name}</div>
              <div className="stng">
                <Image width={30} src={settings} alt="s" />
              </div>
            </div>
            <div className="container-container">
              <Container level={container.level} />
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
      <div className="new-installation-btn">
        <Button
          text={requestOn ? "Cancel" : "Request New Installation"}
          dark={true}
          onClick={() => setRequestOn(!requestOn)}
        />
      </div>

      {requestOn && (
        <div className="container-card">
          <RequestInstallation />
        </div>
      )}

      <style jsx>{`
        .containers {
          ${styles.flexAligncenter};
          flex-wrap: wrap;
          gap: 1rem;
          padding: 1rem 0rem;
        }
        .container-card {
          border: 1px solid lightgray;
          max-width: 26rem;
          margin: auto;
          padding: 1rem 2rem;
          border-radius: 1rem;
          -webkit-border-radius: 1rem;
          -moz-border-radius: 1rem;
          -ms-border-radius: 1rem;
          -o-border-radius: 1rem;
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
          padding: 1rem 0;
        }
        .state-led {
          width: 1.2rem;
          height: 1.2rem;
          border-radius: 50%;
          -webkit-border-radius: 50%;
          -moz-border-radius: 50%;
          -ms-border-radius: 50%;
          -o-border-radius: 50%;
          background: ${styles.secondaryColor};
        }
        .led-active {
          background: ${styles.primaryColor};
        }
        .new-installation-btn {
          padding: 2rem;
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
  { id: "2", name: "Roof Container", sensor_state: true, level: 200 },
  { id: "3", name: "Street Container", sensor_state: false, level: 20 },
];
