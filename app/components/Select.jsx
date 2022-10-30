import { useId } from "react";
import styles from "@/styles/Input.module.css";

export default function Select({
  name,
  options,
  selected,
  setSelected,
  noDefault,
}) {
  const id = useId();

  return (
    <>
      <div className={styles.inputContainer}>
        <select
          className={styles.input}
          id={id}
          onChange={(e) => setSelected(e.target.value)}
          defaultValue={selected}>
          {!noDefault && <option value="">Select {name}</option>}
          {options.map((option, i) => (
            <option key={i} value={option}>
              {option}
            </option>
          ))}
        </select>
        <label htmlFor={id} className={styles.label}>
          {name}
        </label>
      </div>
    </>
  );
}
