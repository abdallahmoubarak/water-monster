import { styles } from "@/utils/styles";

export default function Button({ text = "click", onClick, dark, font }) {
  return (
    <>
      <button onClick={onClick} className={dark ? "dark" : ""}>
        {text}
      </button>
      <style jsx="true">{`
        button {
          background: ${styles.primaryColor};
          color: white;
          padding: 0.6rem 3rem;
          border-radius: 30rem;
          font-size: ${font || "1.2rem"};
          border: none;
          cursor: pointer;
          font-weight: 600;
          width: 100%;
          border: 1px solid ${styles.primaryColor};
        }
        button:hover {
          background: #0092d1;
        }
        .dark {
          background: white;
          color: ${styles.primaryColor};
        }
        .dark:hover {
          background: #a1cbe2;
        }
      `}</style>
    </>
  );
}
