import ChatBox from "@/components/ChatBox";
import Layout from "./sLayout";

export default function Chat({ setPage, user }) {
  return (
    <>
      <Layout>
        <ChatBox setPage={setPage} user={user} />
      </Layout>
    </>
  );
}
