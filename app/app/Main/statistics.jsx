import { styles } from "@/utils/styles";
import Image from "next/image";

export default function Statistics() {
  return (
    <>
      <div className="no-history">
        <Image src={"/png/Container.png"} width={280} height={300} alt="" />
      </div>

      <div>Filling history</div>

      <style jsx>{`
        .no-history {
          ${styles.flexJustifycenter};
          padding-top: 2rem;
        }
      `}</style>
    </>
  );
}
