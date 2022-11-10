import { styles } from "@/utils/styles";

export default function Field({ title, value }) {
  return (
    <>
      <div className="field">
        <div className="field-title">{title}</div>
        <div className="field-value">{value}</div>
      </div>
      <style jsx>{`
        .field {
          ${styles.flexAligncenter};
          ${styles.justifyBetween};
          background: #f3f3f3;
          width: 100%;
          padding: 0.4rem;
        }
        .field-title {
          font-weight: bold;
        }
        .field-value {
          cursor: pointer;
        }
      `}</style>
    </>
  );
}
