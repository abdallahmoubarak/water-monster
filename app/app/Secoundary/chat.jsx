import ChatBox from "@/components/ChatBox";

export default function Chat({ setPage, user }) {
  return (
    <>
      <div className="page">
        <ChatBox setPage={setPage} user={user} />
      </div>
      <style jsx>{`
        .page {
          height: 100vh;
        }
      `}</style>
    </>
  );
}
