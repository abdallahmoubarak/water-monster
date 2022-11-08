import Button from "@/components/Button";
import CreditCard from "@/components/CreditCard";
import Input from "@/components/Input";
import InputsContainer from "@/components/InputsContainer";
import { useState } from "react";
import Layout from "./sLayout";

export default function Wallet({ currentUser, setPage }) {
  const [name, setName] = useState();
  const [cardNumber, setCardNumber] = useState();
  const [exp, setExp] = useState();
  const [ccv, setCcv] = useState();

  const [amount, setAmount] = useState();

  return (
    <>
      <Layout title={"Wallet"} onClick={() => setPage("Profile")}>
        <div>Your Balance</div>
        <CreditCard name={name} number={cardNumber} date={exp} />

        <InputsContainer>
          <Input name={"Name on card"} value={name} setValue={setName} />
          <Input
            name={"Card number"}
            type={"number"}
            value={cardNumber}
            setValue={setCardNumber}
          />
          <Input name={"Exp.End"} value={exp} setValue={setExp} />
          <Input name={"CCV"} value={ccv} setValue={setCcv} />

          <Input name={"Amount"} value={amount} setValue={setAmount} />

          <Button text="Charge" />
        </InputsContainer>
      </Layout>
    </>
  );
}
