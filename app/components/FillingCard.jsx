import { formatter } from "@/utils/currencyFormatter";
import { dateTimeChanger } from "@/utils/time";
import styles from "@/styles/FillingCard.module.css";
import Button from "./Button";

export default function FillingCard({ item }) {
  return (
    <>
      <div className={styles.cardContainer}>
        <div className={styles.imgNameContainer}>
          <div className={styles.cardImg}>
            {item?.provider[0]?.profile_url && (
              <Image src={user?.profile_url} alt="" width={48} height={48} />
            )}
          </div>
          <div>{item?.provider[0].name}</div>
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
              <span>{formatter.format(100 * item?.initial_state)}</span>
            </div>
          </div>
        </div>
        <div className={styles.cardFooter}>
          <Button text="Pay" />
        </div>
        <div className={styles.date}>{dateTimeChanger(item.createdAt)}</div>
      </div>
    </>
  );
}
