import Box from "@/components/Box";
import Button from "@/components/Button";
import Field from "@/components/Field";
import Input from "@/components/Input";
import InputsContainer from "@/components/InputsContainer";
import UploadImage from "@/components/UploadImage";
import { useUpdateName, useUpdatePhone } from "@/hooks/useUser";
import { formatter } from "@/utils/currencyFormatter";
import { client } from "pages/_app";
import { useState } from "react";
import Layout from "./sLayout";

export default function Profile({ setPage }) {
  const currentUser = client.getQueryData(["User"]);
  const [name, setName] = useState(currentUser?.name || "");
  const [phone, setPhone] = useState(currentUser?.phone || "");
  const [image, setImage] = useState("");
  const [base64, setImg64] = useState("");

  const { mutate: updateName } = useUpdateName();
  const { mutate: updatePhone } = useUpdatePhone();

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
                  updateName({ id: currentUser.id, name })
                }
              />
              <Input
                name="Phone number"
                value={phone}
                setValue={setPhone}
                onBlur={() =>
                  currentUser?.phone !== phone &&
                  updatePhone({ id: currentUser.id, phone })
                }
              />
              <Field
                title={"Wallet balance"}
                value={formatter.format(13000000)}
              />
              <Button
                text={currentUser.type === "Client" ? "Recharge" : "Withdraw"}
                onClick={() => setPage("Wallet")}
              />
              <Field title={"Language"} value={"En"} />
              <Field title={"Email"} value={currentUser.email} />

              <Button
                text="Logout"
                dark={true}
                onClick={() => {
                  client.setQueryData(["JWT"], null);
                  client.setQueryData(["User"], null);
                  localStorage.removeItem("JWT");
                  localStorage.removeItem("User");
                }}
              />
            </InputsContainer>
          </Box>
        </div>
      </Layout>
    </>
  );
}
