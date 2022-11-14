import Button from "@/components/Button";
import Input from "@/components/Input";
import { useEffect, useState } from "react";
import { styles } from "@/utils/styles";
import Switch from "./Switch";
import { client } from "pages/_app";
import { FaRegEyeSlash } from "react-icons/fa";
import { BiWater } from "react-icons/bi";
import { MdPendingActions } from "react-icons/md";
import { useDeleteContainer, useUpdateContainer } from "@/hooks/useContainer";
import Box from "./Box";

export default function SettingForm({ containerId, setPage }) {
  const [container, setContainer] = useState();
  const [name, setName] = useState("");
  const [size, setSize] = useState("");
  const [address, setAddress] = useState("");
  const [privateOn, setPrivateOn] = useState(true);
  const [manual, setManual] = useState(true);
  const [state, setState] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { mutate: updateContainer } = useUpdateContainer({
    setPage,
    setIsLoading,
  });

  const { mutate: deleteContainer } = useDeleteContainer({
    setPage,
    setIsLoading,
  });

  useEffect(() => {
    const cnt = client
      ?.getQueryData(["Containers"])
      ?.filter((item) => item.id === containerId)[0];
    setContainer(cnt);
    setName(cnt.name);
    setSize(cnt.size);
    setAddress(cnt.address);
    setPrivateOn(cnt.private_mode);
    setManual(cnt.filling_mode);
    setState(cnt.installation_request?.state);
  }, [containerId]);

  const handleUpdate = () => {
    updateContainer({ id: container.id, name, size });
    setIsLoading(true);
  };

  return (
    <>
      <div className="setting-container">
        {state === "done" && (
          <Box title={"Controll"}>
            <Switch
              icon={<FaRegEyeSlash />}
              title={"Private Mode"}
              on={privateOn}
              setOn={setPrivateOn}
              description={
                privateOn
                  ? "Providers can't see your container !!!"
                  : "Providers can see your container"
              }
            />
            <Switch
              icon={<BiWater />}
              title={"Filling Mode"}
              on={manual}
              setOn={setManual}
              description={manual ? "Manual" : "Automatically"}
            />
            {manual && <Button text={"Request Fillment"} dark={true} />}
          </Box>
        )}

        {/* Information section  */}

        <Box title={"Inforamation"}>
          {state !== "done" && (
            <div className="state">
              <MdPendingActions />
              <div>Pending for {state}...</div>
            </div>
          )}
          <Input name="Container name" value={name} setValue={setName} />
          <Input name={"Size"} value={size} setValue={setSize} />
          <Input name={"Address"} value={address} disabled={true} />
          <div className="btn-container">
            <Button
              text="Save"
              onClick={handleUpdate}
              isLoading={isLoading}
              disabled={name === container?.name}
            />
            {state === "approval" && (
              <Button
                text="Delete"
                dark={true}
                onClick={() => deleteContainer(container.id)}
              />
            )}
          </div>
        </Box>
      </div>

      <style jsx>{`
        .setting-container {
          ${styles.flexColumn};
          gap: 1rem;
        }
        .state {
          ${styles.flexAligncenter};
          gap: 0.3rem;
          color: ${styles.secondaryColor};
        }
        .btn-container {
          ${styles.flexAligncenter};
        }
      `}</style>
    </>
  );
}
