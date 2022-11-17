import ReuestCard from "@/components/admin/RequestCard";
import PageTitle from "@/components/PageTitle";
import { useRequests } from "@/hooks/useRequest";
import { styles } from "@/utils/styles";

export default function Requests() {
  const { data: requests } = useRequests();
  return (
    <>
      <div className="page">
        <PageTitle text="Requests" />

        <div className="cards-container">
          {requests?.map((request, i) => (
            <ReuestCard key={i} request={request} />
          ))}
        </div>
      </div>
      <style jsx>{`
        .page {
          height: 100%;
          overflow: auto;
        }
        .cards-container {
          padding: 0.6rem 1rem;
          ${styles.flexAligncenter};
          flex-wrap: wrap;
          gap: 1rem;
        }
      `}</style>
    </>
  );
}
