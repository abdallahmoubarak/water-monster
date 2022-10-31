import Button from "@/components/Button";
import Container from "@/components/SVG/Container";
import Image from "next/image";
import settings from "@/public/svg/settings.svg";
import { styles } from "@/utils/styles";

export default function Containers() {
  return (
    <>
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
      <Button text="Request New Installation" dark={true} />

      <style jsx>{`
        .container-container {
          max-width: 18rem;
          margin: auto;
        }
        .flex {
          max-width: 18rem;
          margin: auto;
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
