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
          width: fit-content;
          border: 1px solid ${styles.primaryColor};
          margin: auto;
          display: block;
          min-width: 12rem;
        }
        button:hover {
          color: white;
          background: #33a9b3;
        }
        .dark {
          background: white;
          color: ${styles.secondaryColor};
          border: 1px solid ${styles.secondaryColor};
        }
        .dark:hover {
          color: white;
          background: ${styles.secondaryColor};
        }
      `}</style>
    </>
  );
}
