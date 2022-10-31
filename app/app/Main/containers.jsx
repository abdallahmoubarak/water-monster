import Button from "@/components/Button";
import Container from "@/components/SVG/Container";
import Image from "next/image";
import settings from "@/public/svg/settings.svg";
import { styles } from "@/utils/styles";

export default function Containers() {
  return (
    <>
      <div className="container-card">
        <div className="flex">
          <div>Roof Container</div>
          <Image src={settings} alt="s" />
        </div>

        <div className="container-container">
          <Container />
        </div>
        <div className="flex">
          <div>Sensor State</div>
          <div className="state-led"></div>
        </div>
      </div>

      <Button text="Request New Installation" dark={true} />

      <style jsx>{`
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
      `}</style>
    </>
  );
}
