import FillingCard from "@/components/FillingCard";
import PageTitle from "@/components/PageTitle";
import StatisticsChart from "@/components/StatisticsChart";
import { useCurrentUser } from "@/hooks/useAuth";
import { useGetFillingRequests } from "@/hooks/useRequest";
import { styles } from "@/utils/styles";
import Image from "next/image";

export default function Statistics({ setChatUser, setPage }) {
  const { data: currentUser } = useCurrentUser({ enabled: true });
  const { data: fillingHistory } = useGetFillingRequests({
    id: currentUser.id,
    userType: currentUser.type,
    enabled: currentUser.type !== "Admin",
  });

  return (
    <>
      {fillingHistory?.length === 0 && (
        <div className="no-history">
          <Image src={"/png/Container.png"} width={280} height={300} alt="" />
        </div>
      )}

      {Boolean(fillingHistory?.length) && (
        <>
          {currentUser.type === "Client" && (
            <div>
              <PageTitle text="Filling statistics" />
              <StatisticsChart data={fillingHistory} />
            </div>
          )}
          <div>
            <PageTitle text="Filling history" />

            <div className="cards-container">
              {fillingHistory
                ?.filter((item) => item.initial_state)
                .map((item, i) => (
                  <FillingCard
                    key={i}
                    item={item}
                    balance={currentUser?.wallet?.amount}
                    setChatUser={setChatUser}
                    setPage={setPage}
                  />
                ))}
            </div>
          </div>
        </>
      )}

      <style jsx>{`
        .no-history {
          ${styles.flexJustifycenter};
          padding-top: 5rem;
        }

        .cards-container {
          padding: 0.6rem 1rem;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          padding-bottom: 2rem;
        }
      `}</style>
    </>
  );
}
