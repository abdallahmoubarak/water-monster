import Alert from "@/components/Alert";
import Box from "@/components/Box";
import Button from "@/components/Button";
import CreditCard from "@/components/CreditCard";
import Field from "@/components/Field";
import Input from "@/components/Input";
import InputsContainer from "@/components/InputsContainer";
import { useChargeWallet, useWithdrawMutation } from "@/hooks/useWallet";
import { formatter } from "@/utils/currencyFormatter";
import { client } from "pages/_app";
import { useState } from "react";
import Layout from "./sLayout";

export default function Wallet({ setPage }) {
  const currentUser = client.getQueryData(["User"]);
  const [name, setName] = useState();
  const [cardNumber, setCardNumber] = useState("");
  const [exp, setExp] = useState("");
  const [ccv, setCcv] = useState("");
  const [flip, setFlip] = useState(false);
  const [amount, setAmount] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [alertMsg, setAlertMsg] = useState("");
  const currentAmount = formatter.format(currentUser?.wallet?.amount);

  const { mutate: charge } = useChargeWallet({ setAmount, setIsLoading });
  const { mutate: withdraw } = useWithdrawMutation({ setAmount, setIsLoading });

  // the function will validate the card info in frontend
  const validation = () => {
    if (name.length < 5) return "Name is required";
    if (cardNumber.length !== 16) return "Card number is required";
    if (exp.length !== 4) return "Exp is required";
    if (ccv.length !== 3) return "CCV is required";
    if (amount.length < 1) return "Amount is required";
    return "done";
  };

  // the function will handle withdraw and charging actions
  const handleAction = (action) => {
    setIsLoading(true);
    const msg = validation();
    msg === "done"
      ? action === "withdraw"
        ? withdraw({
            id: currentUser?.wallet?.id,
            amount: parseFloat(amount),
          })
        : charge({
            id: currentUser?.wallet?.id,
            amount: parseFloat(amount),
          })
      : setAlertMsg(msg);
    msg === "done" && action === "withdraw"
      ? setAlertMsg("Withdraw done")
      : setAlertMsg("Charge done");
  };

  return (
    <>
      <Layout title={"Wallet"} onClick={() => setPage("Profile")}>
        <Box title={"Balance"} withOutShadow={true}>
          <Field title={"Wallet balance"} value={currentAmount} />
        </Box>
        <CreditCard
          name={name}
          number={cardNumber}
          date={exp}
          ccv={ccv}
          flip={flip}
        />
        <Box title={"Card Information"}>
          <InputsContainer>
            <Input name={"Name on card"} value={name} setValue={setName} />
            <Input
              name={"Card number"}
              type={"number"}
              value={cardNumber}
              setValue={setCardNumber}
              limit={17}
            />
            <Input name={"Exp.End"} value={exp} setValue={setExp} limit={5} />
            <Input
              name={"CCV"}
              type={"number"}
              value={ccv}
              setValue={setCcv}
              onFocus={() => setFlip(true)}
              onBlur={() => setFlip(false)}
              limit={4}
            />
          </InputsContainer>
        </Box>
        <Box withOutShadow={true}>
          <Input name={"Amount"} value={amount} setValue={setAmount} />
          {currentUser.type === "Client" ? (
            <Button
              text="Charge"
              isLoading={isLoading}
              onClick={() => handleAction("charge")}
            />
          ) : (
            <Button
              text="Withdraw"
              isLoading={isLoading}
              onClick={() => handleAction("withdraw")}
            />
          )}
        </Box>
        <Alert alertMsg={alertMsg} setAlertMsg={setAlertMsg} />
      </Layout>
    </>
  );
}
