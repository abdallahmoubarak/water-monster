import SettingForm from "@/components/SettingForm";
import { styles } from "@/utils/styles";
import Layout from "./sLayout";

export default function ContainerSetting({ setPage, containerId }) {
  return (
    <>
      <Layout title={"Container Setting"} onClick={() => setPage("Containers")}>
        <div className="setting-body">
          <SettingForm containerId={containerId} setPage={setPage} />
        </div>
      </Layout>

      <style jsx>{`
        .setting-body {
          padding: 0.6rem;
        }
      `}</style>
    </>
  );
}
