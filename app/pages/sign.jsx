import Button from "@/components/Button";
import Input from "@/components/Input";
import Select from "@/components/Select";
import { useState } from "react";
import Layout from "./layout";

export default function SignPage() {
  const [signup, setSignUp] = useState(true);
  const [selected, setSelected] = useState("Personal");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [msg, setMsg] = useState("");
  return (
    <>
      <Layout>
        <div className="sign-container">
          <h1>{signup ? "Sign Up" : "Sign In"}</h1>
          <div className="inputs-container">
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
          </div>

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
            onClick={() => handleSignClick(signup ? "signup" : "signin")}
          />
        </div>
      </Layout>
      <style jsx>{`
        h1 {
          width: 100%;
          font-size: 2rem;
          padding-bottom: 1rem;
        }
        .sign-container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          max-width: 26rem;
          margin: auto;
          padding: 1rem;
          color: var(--primary-color);
        }
        .inputs-container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 0.8rem;
          width: 100%;
          padding: 1rem 0;
        }
        .switch {
          cursor: pointer;
          text-decoration: underline;
          padding: 0.2rem;
        }
        .invalid-msg {
          font-size: 0.8rem;
          text-align: left;
          min-height: 1rem;
          width: 100%;
        }
        @media only screen and (min-width: 600px) {
          .sign-container {
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
            margin-top: 1rem;
            border-radius: 1rem;
            -webkit-border-radius: 1rem;
            -moz-border-radius: 1rem;
            -ms-border-radius: 1rem;
            -o-border-radius: 1rem;
            transition: all 0.3s ease;
            -webkit-transition: all 0.3s ease;
            -moz-transition: all 0.3s ease;
            -ms-transition: all 0.3s ease;
            -o-transition: all 0.3s ease;
          }
          .sign-container:hover {
            box-shadow: 0px 0px 19px rgba(0, 0, 0, 0.2);
            transition: all 0.3s ease;
            -webkit-transition: all 0.3s ease;
            -moz-transition: all 0.3s ease;
            -ms-transition: all 0.3s ease;
            -o-transition: all 0.3s ease;
          }
        }
      `}</style>
    </>
  );
}
const options = ["Client", "Service Provider"];
