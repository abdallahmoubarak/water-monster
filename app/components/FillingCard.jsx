import { formatter } from "@/utils/currencyFormatter";
import { dateTimeChanger } from "@/utils/time";
import styles from "@/styles/FillingCard.module.css";
import Button from "./Button";
import Image from "next/image";
import Select from "./Select";
import { useState } from "react";
import { useCashMutation, usePayMutation } from "@/hooks/useWallet";
import { client } from "pages/_app";
import { FaCheckCircle } from "react-icons/fa";

export default function FillingCard({ item, balance }) {
  const currentUser = client.getQueryData(["User"]);
  const [selected, setSelected] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const toPay = 100 * item?.initial_state;

  const { mutate: pay } = usePayMutation({ setIsLoading });
  const { mutate: cash } = useCashMutation({ setIsLoading });

  const handelPay = () => {
    {
      setIsLoading(true);
      selected === "Wallet" &&
        pay({
          req_id: item?.id,
          payer_wallet_id: currentUser?.wallet.id,
          payed_wallet_id: item?.provider[0].wallet.id,
          amount: toPay,
        });
      selected === "Cash" && cash({ req_id: item?.id });
    }
  };
  return (
    <>
      <div className={styles.cardContainer}>
        <div className={styles.imgNameContainer}>
          <div className={styles.cardImg}>
            {item?.provider[0]?.profile_url && (
              <Image src={user?.profile_url} alt="" width={48} height={48} />
            )}
          </div>
          <div>{item?.provider[0]?.name}</div>
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
        {!item?.payment_method && (
          <>
            <div className={styles.cardPayment}>
              <Select
                name="Payment"
                options={["Wallet", "Cash"]}
                setSelected={setSelected}
                selected={selected}
              />
            </div>
            <div className={styles.balance}>
              {selected === "Wallet" &&
                (balance < toPay
                  ? "Charge wallet first, your current balance is: "
                  : "Balance: ") + formatter.format(balance)}
            </div>
          </>
        )}
        <div className={styles.cardFooter}>
          {!item?.payment_method ? (
            !!selected && (
              <Button text="Pay" onClick={handelPay} isLoading={isLoading} />
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
    </>
  );
}
