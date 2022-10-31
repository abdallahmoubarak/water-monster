import Button from "@/components/Button";
import Input from "@/components/Input";
import UploadImage from "@/components/UploadImage";
import { styles } from "@/utils/styles";
import { useState } from "react";

export default function Profile({ currentUser }) {
  const [name, setName] = useState(currentUser?.name || "");
  const [email, setEmail] = useState(currentUser?.email || "");
  const [phone, setPhone] = useState(currentUser?.phone || "");
  const [image, setImage] = useState("");
  const [base64, setImg64] = useState("");
  return (
    <>
      <div>
        <UploadImage
          currentUser={currentUser}
          image={image}
          setImage={setImage}
          setImg64={setImg64}
        />
        <div className="sign-container">
          <div className="inputs-container">
            <Input name="Name" value={name} setValue={setName} />
            <Input name="Email" value={email} setValue={setEmail} />
            <Input name="Phone number" value={phone} setValue={setPhone} />
            <Button text="Save" />
            <Button text="Logout" dark={true} />
          </div>
        </div>
      </div>
      <style jsx>{`
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
