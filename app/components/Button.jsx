import { styles } from "@/utils/styles";
import Loading from "@/public/svg/Loading.svg";
import Image from "next/image";

export default function Button({
  text = "click",
  onClick,
  dark,
  font = "1.2rem",
  isLoading,
  disabled,
}) {
  return (
    <>
      <button
        onClick={onClick}
        className={`${dark && "dark"} ${disabled && "disabled"}`}>
        {isLoading ? (
          <div className="loading">
            <Image src={Loading} height={50} width={50} alt={""} />
          </div>
        ) : (
          text
        )}
      </button>
      <style jsx>{`
        button {
          background: ${styles.primaryColor};
          color: white;
          padding: 0.6rem 2rem;
          border-radius: 30rem;
          font-size: ${font};
          border: none;
          cursor: pointer;
          font-weight: 500;
          width: fit-content;
          border: 1px solid ${styles.primaryColor};
          margin: auto;
          display: block;
          min-width: 8rem;
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
        .loading {
          width: 1rem;
          height: 1.6rem;
          margin: auto;
          ${styles.flexBothcenter};
        }
        .disabled {
          color: white;
          background: gray;
          border: 1px solid gray;
        }
      `}</style>
    </>
  );
}
