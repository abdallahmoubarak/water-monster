import { formatter } from "@/utils/currencyFormatter";
import { dateTimeChanger } from "@/utils/time";
import styles from "@/styles/FillingCard.module.css";
import Button from "./Button";
import Image from "next/image";
import Select from "./Select";
import { useState } from "react";
import { useCashMutation, usePayMutation } from "@/hooks/useWallet";
import { client } from "pages/_app";
import { FaCheckCircle, FaInfoCircle } from "react-icons/fa";
import Alert from "./Alert";
import { BsFillChatFill } from "react-icons/bs";

export default function FillingCard({ item, balance, setChatUser, setPage }) {
  const currentUser = client.getQueryData(["User"]);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [alertMsg, setAlertMsg] = useState("");
  const toPay = 100 * item?.initial_state;
  const user = item?.provider ? item?.provider[0] : item?.creator;

  const { mutate: pay } = usePayMutation({ setIsLoading, setAlertMsg });
  const { mutate: cash } = useCashMutation({ setIsLoading, setAlertMsg });

  const handelPay = () => {
    {
      setIsLoading(true);
      paymentMethod === "Wallet" &&
        pay({
          req_id: item?.id,
          payer_wallet_id: currentUser?.wallet.id,
          payed_wallet_id: item?.provider[0]?.wallet.id,
          amount: toPay,
        });
      paymentMethod === "Cash" && cash({ req_id: item?.id });
    }
  };
  return (
    <>
      <div className={styles.cardContainer}>
        <div className={styles.cardHeader}>
          <div className={styles.imgNameContainer}>
            <div className={styles.cardImg}>
              {user?.profile_url && (
                <Image src={user?.profile_url} alt="" width={48} height={48} />
              )}
            </div>
            <div>{user?.name}</div>
          </div>
          <div
            className={styles.chatIcon}
            onClick={() => {
              setChatUser(user);
              setPage("Chat");
            }}>
            <BsFillChatFill />
          </div>
        </div>
        <div className={styles.cardBody}>
          <div className={styles.cardBodyItem}>
            <div>Filling</div>
            <div>
              <span>{item?.initial_state}</span> litter
            </div>
          </div>
          <div className={styles.cardBodyItem}>
            <div>Price</div>
            <div>
              <span>100 LBP / litter</span>
            </div>
          </div>
          <div className={styles.cardBodyItemTotal}>
            <div>Total</div>
            <div>
              <span>{formatter.format(toPay)}</span>
            </div>
          </div>
        </div>
        {!item?.payment_method && currentUser.type === "Client" && (
          <>
            <div className={styles.cardPayment}>
              <Select
                name="Payment"
                options={["Wallet", "Cash"]}
                setSelected={setPaymentMethod}
                selected={paymentMethod}
              />
            </div>
            <div className={styles.balance}>
              {paymentMethod === "Wallet" &&
                (balance < toPay
                  ? "Charge wallet first, your current balance is: "
                  : "Balance: ") + formatter.format(balance)}
            </div>
          </>
        )}
        <div className={styles.cardFooter}>
          {!item?.payment_method ? (
            !!paymentMethod ? (
              <Button text="Pay" onClick={handelPay} isLoading={isLoading} />
            ) : (
              <div className={styles.waiting}>
                <FaInfoCircle />
                Waiting for payment...
              </div>
            )
          ) : (
            <div className={styles.done}>
              <FaCheckCircle />
              <span>Payment done by {item?.payment_method}</span>
            </div>
          )}
        </div>
        <div className={styles.date}>{dateTimeChanger(item.createdAt)}</div>
      </div>
      <Alert alertMsg={alertMsg} setAlertMsg={setAlertMsg} />
    </>
  );
}
