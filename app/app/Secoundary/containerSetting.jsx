import PendingForForm from "@/components/PendingForForm";
import SettingForm from "@/components/SettingForm";
import { styles } from "@/utils/styles";
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";

export default function ContainerSetting({ setPage, defaultName = "Roof" }) {
  const [name, setName] = useState(defaultName);
  const pending = null;
  return (
    <>
      <div className="setting-page-container">
        <div className="setting-header">
          <div className="back-icon" onClick={() => setPage("Containers")}>
            <FaArrowLeft />
          </div>
          <div className="setting-title">{name} Container</div>
        </div>
        {pending ? (
          <PendingForForm name={name} setName={setName} pending={pending} />
        ) : (
          <SettingForm name={name} setName={setName} />
        )}
      </div>
      <style jsx>{`
        .setting-page-container {
          height: 100vh;
          padding: 1rem 0.6rem;
          position: relative;
          overflow: auto;
        }
        .setting-header {
          ${styles.flexAligncenter};
          gap: 1rem;
        }
        .setting-title {
          color: ${styles.primaryColor};
          font-size: 1.4rem;
        }
        .back-icon {
          font-size: 1.3rem;
          color: ${styles.primaryColor};
          padding: 0.6rem;
          cursor: pointer;
          ${styles.flexBothcenter};
        }
      `}</style>
    </>
  );
}
