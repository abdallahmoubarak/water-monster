import Button from "@/components/Button";
import Input from "@/components/Input";
import Switch from "./Switch";
import { useEffect, useState } from "react";
import { styles } from "@/utils/styles";
import { client } from "pages/_app";
import { FaRegEyeSlash } from "react-icons/fa";
import { BiWater } from "react-icons/bi";
import { MdPendingActions } from "react-icons/md";
import {
  useDeleteContainer,
  useUpdateContainer,
  useUpdateManualMode,
  useUpdatePrivateMode,
} from "@/hooks/useContainer";
import Box from "./Box";

export default function SettingForm({ containerId, setPage }) {
  const [container, setContainer] = useState();
  const [name, setName] = useState("");
  const [size, setSize] = useState("");
  const [address, setAddress] = useState("");
  const [installationState, setInstallationState] = useState("");
  const [isAwaitFilling, setIsAwaitFilling] = useState(false);
  const [isPrivate, setIsPrivate] = useState(false);
  const [isManual, setIsManual] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { mutate: updatePrivateMode } = useUpdatePrivateMode();
  const { mutate: updateManualMode } = useUpdateManualMode();
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
    setName(cnt?.name);
    setSize(cnt?.size);
    setAddress(cnt?.address);
    setIsPrivate(cnt?.private_mode);
    setIsManual(cnt?.manual_mode);
    setInstallationState(
      cnt?.requests.filter((req) => req.title === "Installation")[0]?.state,
    );
    cnt?.requests.length === 2 && setIsAwaitFilling(true);
  }, [containerId]);

  const handleUpdate = () => {
    updateContainer({ id: container.id, name, size });
    setIsLoading(true);
  };

  const togglePrivateMode = () => {
    updatePrivateMode({ id: container.id, private_mode: !isPrivate });
    setIsPrivate(!isPrivate);
  };
  const toggleManualMode = () => {
    updateManualMode({ id: container.id, manual_mode: !isManual });
    setIsManual(!isManual);
  };

  return (
    <>
      <div className="setting-container">
        {installationState === "done" && (
          <Box title={"Controll"}>
            <Switch
              icon={<FaRegEyeSlash />}
              title={"Private Mode"}
              on={isPrivate}
              setOn={togglePrivateMode}
              description={
                isPrivate
                  ? "Providers can't see your container !!!"
                  : "Providers can see your container"
              }
            />
            <Switch
              icon={<BiWater />}
              title={"Filling Mode"}
              on={isManual}
              setOn={toggleManualMode}
              description={isManual ? "Manual" : "Automatically"}
            />
            {isAwaitFilling
              ? "Waiting for fillment..."
              : isManual && <Button text={"Request Fillment"} dark={true} />}
          </Box>
        )}

        {/* Information section  */}

        <Box title={"Inforamation"}>
          {installationState !== "done" && (
            <div className="state">
              <MdPendingActions />
              <div>Pending for {installationState}...</div>
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
            {installationState === "approval" && (
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
