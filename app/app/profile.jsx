import Button from "@/components/Button";
import Input from "@/components/Input";
import UploadImage from "@/components/UploadImage";
import { useUpdateName, useUpdatePhone } from "@/hooks/useUser";
import { styles } from "@/utils/styles";
import { client } from "pages/_app";
import { useState } from "react";

export default function Profile({ currentUser }) {
  const [name, setName] = useState(currentUser?.name || "");
  const [email, setEmail] = useState(currentUser?.email || "");
  const [phone, setPhone] = useState(currentUser?.phone || "");
  const [image, setImage] = useState("");
  const [base64, setImg64] = useState("");

  const { mutate: updateName } = useUpdateName();
  const { mutate: updatePhone } = useUpdatePhone();

  return (
    <>
      <div className="page">
        <UploadImage
          currentUser={currentUser}
          image={image}
          setImage={setImage}
          setImg64={setImg64}
        />
        <div className="sign-container">
          <div className="inputs-container">
            <Input
              name="Name"
              value={name}
              setValue={setName}
              onBlur={() => updateName({ id: currentUser.id, name })}
            />
            <Input
              name="Phone number"
              value={phone}
              setValue={setPhone}
              onBlur={() => updatePhone({ id: currentUser.id, phone })}
            />
            <Input
              name="Email"
              value={email}
              setValue={setEmail}
              disabled={true}
            />
            <Button text="Activate your wallet" />
            <Button
              text="Logout"
              dark={true}
              onClick={() => {
                localStorage.removeItem("JWT");
                localStorage.removeItem("User");
                client.setQueryData(["JWT"], null);
                client.setQueryData(["User"], null);
              }}
            />
          </div>
        </div>
      </div>
      <style jsx>{`
        .page {
          padding: 0.6rem;
        }
        .inputs-container {
          ${styles.flexBothcenter};
          ${styles.flexColumn};
          gap: 0.8rem;
          max-width: 26rem;
          margin: auto;
          width: 100%;
          padding: 1rem 0;
        }
      `}</style>
    </>
  );
}
