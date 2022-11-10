import ContainerSVG from "@/components/SVG/ContainerSVG";
import Image from "next/image";
import settings from "@/public/svg/settings.svg";
import { styles } from "@/utils/styles";

export default function Container({ container, setPage }) {
  return (
    <>
      <div className="container-card">
        <div className="flex">
          <div>{container?.name} Container</div>
          <div
            className="stng"
            onClick={() => setPage("Setting", container.id)}>
            <Image width={30} src={settings} alt="s" />
          </div>
        </div>
        <div className="container-container">
          <ContainerSVG level={container?.water_level} />
        </div>
        <div className="flex">
          <div>Sensor State</div>
          <div
            className={`state-led ${
              container?.sensor_state && "led-active"
            }`}></div>
        </div>
      </div>
      <style jsx>{`
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
        .flex {
          ${styles.fontSize1p4rem};
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
        .stng {
          width: 2rem;
          height: 2rem;
          cursor: pointer;
        }
      `}</style>
    </>
  );
}
