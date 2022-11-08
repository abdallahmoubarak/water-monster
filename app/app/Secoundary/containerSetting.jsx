import SettingForm from "@/components/SettingForm";
import Layout from "./sLayout";

export default function ContainerSetting({ setPage, containerId }) {
  return (
    <>
      <Layout title={"Container Setting"} onClick={() => setPage("Containers")}>
        <SettingForm containerId={containerId} setPage={setPage} />
      </Layout>
    </>
  );
}
