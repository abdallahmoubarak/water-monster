import { styles } from "@/utils/styles";
import Button from "./Button";
import Input from "./Input";

export default function RequestInstallation() {
  return (
    <>
      <div className="title">Container Info</div>
      <div className="input-container">
        <Input name={"Container name"} placeholder={"Roof Container"} />
        <Input name={"Size"} />
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
          padding: 0.6rem 0;
        }
      `}</style>
    </>
  );
}
