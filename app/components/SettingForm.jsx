import Button from "@/components/Button";
import Input from "@/components/Input";
import { useEffect, useState } from "react";
import { styles } from "@/utils/styles";
import Switch from "./Switch";
import { client } from "pages/_app";
import { FaRegEyeSlash } from "react-icons/fa";
import { BiWater } from "react-icons/bi";
import { MdPendingActions } from "react-icons/md";

export default function SettingForm({ containerId }) {
  const [name, setName] = useState("");
  const [size, setSize] = useState("");
  const [address, setAddress] = useState("");
  const [date, setDate] = useState("");
  const [privateOn, setPrivateOn] = useState(true);
  const [auto, setAuto] = useState(true);
  const [state, setState] = useState("");

  useEffect(() => {
    const container = client
      .getQueryData(["Containers"])
      .filter((item) => item.id === containerId)[0];
    setName(container.name);
    setSize(container.size);
    setAddress(container.address);
    setDate(container.date);
    setPrivateOn(container.private_mode);
    setAuto(container.filling_mode);
    setState(container.installation_request?.state);
  }, []);

  return (
    <>
      <div className="input-container">
        {state === "done" && (
          <div className="section">
            <div className="section-title">Controll</div>
            <Switch
              icon={<FaRegEyeSlash />}
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
              icon={<BiWater />}
              title={"Filling Mode"}
              on={auto}
              setOn={setAuto}
              description={auto ? "Automatically" : "Manual"}
            />
            {!auto && <Button text={"Request Fillment"} dark={true} />}
          </div>
        )}

        {/* Information section  */}

        <div className="section">
          <div className="state">
            <MdPendingActions />
            <div>Pending for {state}...</div>
          </div>
          <div className="section-title">Inforamation</div>
          <Input name="Container name" value={name} setValue={setName} />
          <Input name={"Size"} value={size} setValue={setSize} />
          <Input name={"Address"} value={address} disabled={true} />
          <div className="btn-container">
            {state !== "installation" && <Button text="Save" />}
            <Button text="Cancel" dark={true} />
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
          width: 100%;
          max-width: 26rem;
          margin: auto;
        }
        .section-title {
          font-size: 1.4rem;
        }
        .state {
          ${styles.flexAligncenter};
          gap: 0.3rem;
          color: ${styles.secondaryColor};
          padding-top: 1rem;
        }
        .btn-container {
          ${styles.flexAligncenter};
        }
      `}</style>
    </>
  );
}
