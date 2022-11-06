import PendingForForm from "@/components/PendingForForm";
import SettingForm from "@/components/SettingForm";
import { styles } from "@/utils/styles";
import { FaArrowLeft } from "react-icons/fa";

export default function ContainerSetting({ setPage }) {
  const pending = null;
  return (
    <>
      <div className="setting-page-container">
        <div className="setting-header">
          <div className="back-icon" onClick={() => setPage("Containers")}>
            <FaArrowLeft />
          </div>
          <div className="setting-title">Container Setting</div>
        </div>
        <div className="setting-body">
          {pending ? <PendingForForm pending={pending} /> : <SettingForm />}
        </div>
      </div>
      <style jsx>{`
        .setting-page-container {
          height: 100vh;
          position: relative;
          overflow: auto;
        }
        .setting-header {
          ${styles.flexAligncenter};
          gap: 0.6rem;
          background: ${styles.primaryColor};
          color: white;
          padding: 0.6rem;
        }
        .setting-title {
          font-size: 1.4rem;
          font-weight: bold;
        }
        .back-icon {
          font-size: 1.3rem;
          padding: 0.6rem;
          cursor: pointer;
          ${styles.flexBothcenter};
        }
        .setting-body {
          padding: 0.6rem;
        }
      `}</style>
    </>
  );
}
