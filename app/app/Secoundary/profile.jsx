import Box from "@/components/Box";
import Button from "@/components/Button";
import Field from "@/components/Field";
import Input from "@/components/Input";
import InputsContainer from "@/components/InputsContainer";
import UploadImage from "@/components/UploadImage";
import { useUpdateName, useUpdatePhone } from "@/hooks/useUser";
import { useCreateWallet } from "@/hooks/useWallet";
import { formatter } from "@/utils/currencyFormatter";
import { graphQLClient } from "@/utils/graphQLInstance";
import { client } from "pages/_app";
import { useState } from "react";
import Layout from "./sLayout";

export default function Profile({ setPage }) {
  const currentUser = client.getQueryData(["User"]);
  const [name, setName] = useState(currentUser?.name || "");
  const [phone, setPhone] = useState(currentUser?.phone || "");
  const [image, setImage] = useState("");
  const [base64, setImg64] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const currentAmount = formatter.format(
    parseFloat(currentUser?.wallet?.amount),
  );

  const { mutate: updateName } = useUpdateName();
  const { mutate: updatePhone } = useUpdatePhone();
  const { mutate: createWallet } = useCreateWallet({ setIsLoading });

  const handleCreateWallet = () => {
    setIsLoading(true);
    createWallet({ id: currentUser.id });
  };

  return (
    <>
      <Layout title={"Profile"} onClick={() => setPage("Containers")}>
        <UploadImage
          currentUser={currentUser}
          image={image}
          setImage={setImage}
          setImg64={setImg64}
        />
        <div className="sign-container">
          <Box withOutShadow={true}>
            <InputsContainer>
              <Input
                name="Name"
                value={name}
                setValue={setName}
                onBlur={() =>
                  currentUser?.name !== name &&
                  updateName({ id: currentUser?.id, name })
                }
              />
              <Input
                name="Phone number"
                value={phone}
                setValue={setPhone}
                onBlur={() =>
                  currentUser?.phone !== phone &&
                  updatePhone({ id: currentUser?.id, phone })
                }
              />
              {currentUser?.wallet?.amount ? (
                <>
                  <Field title={"Wallet balance"} value={currentAmount} />
                  <Button
                    text={
                      currentUser?.type === "Client" ? "Recharge" : "Withdraw"
                    }
                    onClick={() => setPage("Wallet")}
                  />
                </>
              ) : (
                <Button
                  text="Create a wallet"
                  onClick={handleCreateWallet}
                  isLoading={isLoading}
                />
              )}
              <Field title={"Language"} value={"En"} />
              <Field title={"Email"} value={currentUser?.email} />
              <Button
                text="Logout"
                dark={true}
                onClick={() => {
                  client.setQueryData(["User"], null);
                  localStorage.removeItem("JWT");
                  graphQLClient.setHeaders({ authorization: undefined });
                }}
              />
            </InputsContainer>
          </Box>
        </div>
      </Layout>
    </>
  );
}
