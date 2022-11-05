import { MdPendingActions } from "react-icons/md";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { useState } from "react";
import { styles } from "@/utils/styles";
import Switch from "./Switch";

export default function SettingForm({ name = "Roof", setName }) {
  const [size, setSize] = useState(2000);
  const [address, setAddress] = useState("");
  const [date, setDate] = useState("");
  const [privateOn, setPrivateOn] = useState(true);
  const [auto, setAuto] = useState(true);

  return (
    <>
      <div className="input-container">
        <div className="section">
          <div className="section-title">Controll</div>
          <Switch
            title={"Private Mode"}
            on={privateOn}
            setOn={setPrivateOn}
            description={
              privateOn
                ? "New Providers can't see your container !!!"
                : "All Providers can see your container"
            }
          />
          <Switch
            title={"Filling Mode"}
            on={auto}
            setOn={setAuto}
            description={auto ? "Automatically" : "Manual"}
          />

          {!auto && <Button text={"Request Fillment"} dark={true} />}
        </div>
        <div className="section">
          <div className="section-title">Inforamation</div>
          <Input name="Container name" value={name} setValue={setName} />
          <Input name={"Size"} value={size} setValue={setSize} />
          <Input name={"Address"} value={address} disabled={true} />
          <div className="btn-container">
            <Button text="Save" />
          </div>
        </div>
      </div>

      <style jsx>{`
        .input-container {
          ${styles.flexColumn};
          gap: 1rem;
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
        .btn-container {
          ${styles.flexAligncenter};
        }
        .state {
          ${styles.flexAligncenter};
          gap: 0.3rem;
          color: gray;
          padding-top: 1rem;
        }
      `}</style>
    </>
  );
}
