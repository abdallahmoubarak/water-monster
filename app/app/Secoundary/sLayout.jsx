import ChatBox from "@/components/ChatBox";

export default function Layout({ children }) {
  return (
    <>
      <div className="page">{children}</div>
      <style jsx>{`
        .page {
          height: 100vh;
        }
      `}</style>
    </>
  );
}
