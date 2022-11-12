import { styles } from "@/utils/styles";
import Image from "next/image";

export default function Statistics() {
  return (
    <>
      <div className="no-history">
        <Image src={"/png/Container.png"} width={280} height={300} alt="" />
      </div>

      <style jsx>{`
        .no-history {
          ${styles.flexJustifycenter}
        }
      `}</style>
    </>
  );
}
