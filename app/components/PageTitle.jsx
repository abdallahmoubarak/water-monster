export default function PageTitle({ text }) {
  return (
    <>
      <h1 className="page-title">{text}</h1>
      <style jsx>{`
        .page-title {
          font-size: 1.4rem;
          font-weight: bold;
          padding: 0.6rem 1rem;
        }
      `}</style>
    </>
  );
}
