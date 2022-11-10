import { styles } from "@/utils/styles";
import { FaArrowLeft } from "react-icons/fa";

export default function Layout({ children, onClick, title }) {
  return (
    <>
      <div className="page-container">
        <div className="page-header">
          <div className="back-icon" onClick={onClick}>
            <FaArrowLeft />
          </div>
          <div className="page-title">{title}</div>
        </div>
        <div className="page">{children}</div>
      </div>
      <style jsx>{`
        .page-container {
          display: flex;
          flex-direction: column;
          height: 100vh;
          overflow: hidden;
        }

        .page {
          position: relative;
          overflow: auto;
          padding: 0.8rem;
        }
        .page-header {
          ${styles.flexAligncenter};
          gap: 0.6rem;
          background: ${styles.primaryColor};
          color: white;
          padding: 0.6rem;
        }
        .page-title {
          ${styles.fontSize1p4rem};
          font-weight: bold;
        }
        .back-icon {
          font-size: 1.3rem;
          padding: 0.6rem;
          cursor: pointer;
          ${styles.flexBothcenter};
        }
      `}</style>
    </>
  );
}
