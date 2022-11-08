import styles from "@/styles/Input.module.css";
import { useId } from "react";

export default function Input({
  name,
  value,
  setValue,
  type,
  onBlur,
  onKeyPress,
  onFocus,
  accept,
  disabled,
  limit = 40,
}) {
  const id = useId();
  return (
    <>
      <div className={styles.inputContainer}>
        {disabled ? (
          <>
            <div className={styles.inputDisabled}>{value}</div>
            <label className={styles.labelDisabled} htmlFor={id}>
              {name}
            </label>
          </>
        ) : (
          <>
            <input
              className={styles.input}
              autoComplete="off"
              id={id}
              placeholder={name}
              value={value}
              type={type || "text"}
              onChange={(e) =>
                e.target.value.length < limit && setValue(e.target.value)
              }
              onBlur={onBlur && onBlur}
              onKeyPress={onKeyPress && onKeyPress}
              accept={accept && accept}
              onFocus={onFocus && onFocus}
            />
            <label className={styles.label} htmlFor={id}>
              {name}
            </label>
          </>
        )}
      </div>
    </>
  );
}
