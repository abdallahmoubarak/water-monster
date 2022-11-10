import { useCreateContainer } from "@/hooks/useContainer";
import { styles } from "@/utils/styles";
import { useState } from "react";
import Box from "./Box";
import Button from "./Button";
import Input from "./Input";
import InputsContainer from "./InputsContainer";

export default function RequestInstallation({ currentUser, close }) {
  const [name, setName] = useState("");
  const [size, setSize] = useState("");
  const [address, setAddress] = useState("");
  const [date, setDate] = useState("");

  const { mutate: createContainer } = useCreateContainer();

  const handleRequest = () => {
    createContainer({ id: currentUser.id, name, size, address, date });
    setName("");
    setSize("");
    setAddress("");
    setDate("");
    close();
  };

  return (
    <>
      <Box title={"Request new container"}>
        <InputsContainer>
          <Input name={"Container name"} value={name} setValue={setName} />
          <Input name={"Size"} value={size} setValue={setSize} />
          <Input name={"Address"} value={address} setValue={setAddress} />
          <Input
            type={"date"}
            name={"Prefared date"}
            value={date}
            setValue={setDate}
          />
        </InputsContainer>
        <Button text="Request now" onClick={handleRequest} />
      </Box>
      <style jsx>{`
        .input-container {
          ${styles.flexColumn};
          gap: 0.6rem;
          padding: 0.6rem 0;
        }
      `}</style>
    </>
  );
}
