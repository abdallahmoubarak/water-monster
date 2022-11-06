import { styles } from "@/utils/styles";
import { useState } from "react";
import Button from "./Button";
import Input from "./Input";

export default function RequestInstallation({ currentUser }) {
  const [name, setName] = useState("");
  const [size, setSize] = useState();
  const [address, setAddress] = useState("");
  const [date, setDate] = useState("");

  const handleRequest = () => {
    console.log({ id: currentUser.id, name, size, address, date });
  };

  return (
    <>
      <div className="section">
        <div className="section-title">Request new container </div>
        <div className="input-container">
          <Input name={"Container name"} value={name} setValue={setName} />
          <Input name={"Size"} value={size} setValue={setSize} />
          <Input name={"Address"} value={address} setValue={setAddress} />
          <Input
            type={"date"}
            name={"Prefared date"}
            value={date}
            setValue={setDate}
          />
        </div>
        <Button text="Request now" onClick={handleRequest} />
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
          width: 100%;
          max-width: 26rem;
          margin: auto;
        }
        .section-title {
          font-size: 1.4rem;
        }
      `}</style>
    </>
  );
}
