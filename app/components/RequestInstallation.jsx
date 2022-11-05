import { styles } from "@/utils/styles";
import Button from "./Button";
import Input from "./Input";

export default function RequestInstallation() {
  return (
    <>
      <div className="section">
        <div className="section-title">Information</div>
        <div className="input-container">
          <Input name={"Container name"} />
          <Input name={"Size"} />
          <Input name={"Address"} />
          <Input type={"date"} name={"Prefared date"} />
        </div>
        <Button text="Accept" />
      </div>
      <style jsx>{`
        .input-container {
          ${styles.flexColumn};
          gap: 0.6rem;
          padding: 0.6rem 0;
        }
        .section {
          ${styles.boxshadow};
          ${styles.borderRadius1rem};
          padding: 1rem;
          ${styles.flexColumn};
          gap: 1rem;
        }
        .section-title {
          color: ${styles.primaryColor};
          font-size: 1.4rem;
        }
      `}</style>
    </>
  );
}
