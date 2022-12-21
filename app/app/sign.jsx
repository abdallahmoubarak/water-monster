import Button from "@/components/Button";
import Input from "@/components/Input";
import Select from "@/components/Select";
import Or from "@/components/SVG/Or";
import { styles } from "@/utils/styles";
import { useEffect, useState } from "react";
import Layout from "./layout";
import googleLogo from "@/public/svg/google.svg";
import metaLogo from "@/public/svg/metamask.svg";
import Image from "next/image";
import { useSignIn, useSignUp } from "@/hooks/useAuth";
import { validSign } from "@/utils/signValidation";
import InputsContainer from "@/components/InputsContainer";
import { signInWithGoogle } from "@/utils/firebase";
import { client } from "pages/_app";

export default function SignPage() {
  const [signup, setSignUp] = useState(true);
  const [selected, setSelected] = useState("Client");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [msg, setMsg] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { mutate: signUp } = useSignUp({ setMsg, setIsLoading });
  const { mutate: signIn } = useSignIn({ setMsg, setIsLoading });

  const handleSignClick = (signType) => {
    if (!isLoading) {
      setIsLoading(true);
      setMsg("");
      let type = selected;
      if (!validSign(signType, email, password, name, type)) {
        setIsLoading(false);
        return setMsg("Inputs are not valid");
      }

      signType === "signin"
        ? signIn({ email, password })
        : signUp({ type, name, email, password });
    }
  };

  return (
    <>
      <Layout>
        <div className="sign-container">
          <h1>{signup ? "Sign Up" : "Sign In"}</h1>
          <InputsContainer>
            {signup && <Input name="Name" value={name} setValue={setName} />}
            <Input name="Email" value={email} setValue={setEmail} />
            <Input
              name="Password"
              type={"password"}
              value={password}
              setValue={setPass}
            />
            {signup && (
              <Select
                name="Account type"
                options={options}
                setSelected={setSelected}
                selected={selected}
                noDefault={true}
              />
            )}
            <div className="invalid-msg">{msg}</div>
          </InputsContainer>

          <div
            className="switch"
            onClick={() => {
              setMsg("");
              setSignUp(!signup);
            }}>
            {signup ? "I already have an account" : "I don't have an account"}
          </div>

          <Button
            text={signup ? "Sign Up" : "Sign In"}
            isLoading={isLoading}
            onClick={() => handleSignClick(signup ? "signup" : "signin")}
          />
        </div>
        <div className="or-container">
          <Or />
        </div>
        <div className="btn-container">
          <button
            className="google-btn"
            onClick={() => signInWithGoogle(setName, setEmail, setProfilePic)}>
            <div>
              <Image src={googleLogo} alt="G" height={"30"} />
            </div>
            <div>Continue with google</div>
          </button>
          <button className="google-btn">
            <div>
              <Image src={metaLogo} alt="M" height={"30"} />
            </div>
            <div>Continue with Metamask</div>
          </button>
        </div>
      </Layout>
      <style jsx>{`
        h1 {
          width: 100%;
          font-size: 2rem;
          padding-bottom: 1rem;
        }
        .sign-container {
          ${styles.flexBothcenter};
          ${styles.flexColumn};
          max-width: 26rem;
          margin: auto;
          padding: 1rem;
          color: ${styles.primaryColor};
        }
        .switch {
          cursor: pointer;
          text-decoration: underline;
          padding: 0.2rem;
        }
        .invalid-msg {
          ${styles.fontSizep8rem};
          text-align: left;
          min-height: 1rem;
          width: 100%;
        }
        .or-container {
          max-width: 26rem;
          margin: auto;
          padding: 2rem;
        }
        .btn-container {
          ${styles.flexBothcenter};
          ${styles.flexColumn};
          gap: 1rem;
          padding-bottom: 2rem;
        }
        .google-btn {
          transition: background-color 0.3s, box-shadow 0.3s;
          padding: 0.4rem 1rem;
          padding-top: 0.6rem;
          border: none;
          border-radius: 3px;
          box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.04),
            0 1px 1px rgba(0, 0, 0, 0.25);
          color: #757575;
          background-color: white;
          cursor: pointer;
          ${styles.flexBothcenter}
          gap:1rem;
        }
        .google-btn:hover {
          box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.04),
            0 2px 4px rgba(0, 0, 0, 0.25);
        }

        .google-btn:focus {
          outline: none;
          box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.04),
            0 2px 4px rgba(0, 0, 0, 0.25), 0 0 0 3px #c8dafc;
        }
        @media only screen and (min-width: 600px) {
          .sign-container {
            margin-top: 2rem;
            ${styles.borderRadius1rem};
            ${styles.boxshadow};
            ${styles.transitionAll3s};
          }
          .sign-container:hover {
            ${styles.boxshadowHover};
            ${styles.transitionAll3s};
          }
        }
      `}</style>
    </>
  );
}
const options = ["Client", "Provider"];
