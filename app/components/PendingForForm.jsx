import { MdPendingActions } from "react-icons/md";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { useState } from "react";
import { styles } from "@/utils/styles";

export default function PendingForForm({ name, setName, pending }) {
  const [size, setSize] = useState(2000);
  const [address, setAddress] = useState("");
  const [date, setDate] = useState("");
  return (
    <>
      <div className="state">
        <MdPendingActions />
        <div>Pending for {pending}...</div>
      </div>
      <div className="input-container">
        <Input
          name="Container name"
          value={name}
          setValue={setName}
          disabled={pending !== "approval"}
        />
        <Input
          name={"Size"}
          value={size}
          setValue={setSize}
          disabled={pending !== "approval"}
        />
        <Input
          name={"Address"}
          value={address}
          setValue={setAddress}
          disabled={pending !== "approval"}
        />
        <Input
          type={"date"}
          name={"Prefared date"}
          value={date}
          setValue={setDate}
          disabled={pending !== "approval"}
        />
      </div>
      <div className="btn-container">
        {pending === "approval" && <Button text="Edit" />}
        <Button text="Cancel Request" dark={true} />
      </div>
      <style>{`
      .btn-container {
        ${styles.flexAligncenter};
      }
      .input-container {
        ${styles.flexColumn};
        gap: 0.6rem;
        padding: 0.6rem 0;
      }
      .state {
        ${styles.flexAligncenter};
        gap: 0.3rem;
        color: ${styles.secondaryColor};
        padding-top: 1rem;
      }
      
      `}</style>
    </>
  );
}
