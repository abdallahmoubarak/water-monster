import ChatBox from "@/components/ChatBox";

export default function Chat({ setPage, user }) {
  return (
    <>
      <div className="page">
        <ChatBox setPage={setPage} user={user} />
      </div>
      <style jsx>{`
        .page {
          padding: 0.6rem;
          height: 100vh;
        }
      `}</style>
    </>
  );
}
