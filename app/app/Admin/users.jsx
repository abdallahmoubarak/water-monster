import Table from "@/components/admin/Table";

export default function Users() {
  return (
    <>
      <div className="table-container">
        <Table header={header} />
      </div>
      <style jsx>{`
        .table-container {
          padding: 1rem 0.6rem;
        }
      `}</style>
    </>
  );
}
const header = ["Type", "Name"];
