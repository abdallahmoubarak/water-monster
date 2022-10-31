import { styles } from "@/utils/styles";
import Button from "./Button";
import Input from "./Input";

export default function RequestInstallation() {
  return (
    <>
      <div className="title">Request Package Installation</div>
      <div className="input-container">
        <Input name={"Container name"} placeholder={"Roof Container"} />
        <Input name={"Address"} placeholder={"Street, building,"} />
        <Input type={"date"} name={"Prefared date"} />
      </div>
      <Button text="Accept" />
      <style jsx>{`
        .title {
          font-size: 1.4rem;
        }
        .input-container {
          ${styles.flexColumn};
          gap: 0.6rem;
          padding: 1.2rem 0;
        }
      `}</style>
    </>
  );
}
