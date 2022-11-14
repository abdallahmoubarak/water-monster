import ReuestCard from "@/components/admin/RequestCard";
import { useRequests } from "@/hooks/useRequest";
import { styles } from "@/utils/styles";

export default function Requests() {
  const { data: requests } = useRequests();
  return (
    <>
      <div className="cards-container">
        {requests?.map((request, i) => (
          <ReuestCard key={i} request={request} />
        ))}
      </div>
      <style jsx>{`
        .cards-container {
          padding: 0.6rem;
          ${styles.flexBothcenter};
          flex-wrap: wrap;
          gap: 0.6rem;
          overflow: auto;
          height: 100%;
        }
      `}</style>
    </>
  );
}
