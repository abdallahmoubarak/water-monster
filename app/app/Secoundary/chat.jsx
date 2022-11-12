import ChatBox from "@/components/ChatBox";

export default function Chat({ setPage, user, socket }) {
  return (
    <>
      <div className="page">
        <ChatBox setPage={setPage} user={user} socket={socket} />
      </div>
      <style jsx>{`
        .page {
          height: 100vh;
        }
      `}</style>
    </>
  );
}
