import Table from "@/components/admin/Table";
import { useGetUsers } from "@/hooks/useUser";

export default function Users() {
  const { data: users } = useGetUsers();
  return (
    <>
      <div className="table-container">
        <Table header={header} rows={users} />
      </div>
      <style jsx>{`
        .table-container {
          height: 100%;
          overflow: auto;
          padding: 1rem 0.6rem;
        }
      `}</style>
    </>
  );
}
const header = ["Type", "Name"];
