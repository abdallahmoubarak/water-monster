import FillingCard from "@/components/FillingCard";
import PageTitle from "@/components/PageTitle";
import { useGetUserFillingRequests } from "@/hooks/useRequest";
import { styles } from "@/utils/styles";
import Image from "next/image";
import { client } from "pages/_app";

export default function Statistics() {
  const currentUser = client.getQueryData(["User"]);
  const { data: fillingHistory } = useGetUserFillingRequests({
    id: currentUser.id,
  });
  console.log(fillingHistory);

  return (
    <>
      {fillingHistory?.length === 0 && (
        <div className="no-history">
          <Image src={"/png/Container.png"} width={280} height={300} alt="" />
        </div>
      )}

      {Boolean(fillingHistory?.length) && (
        <>
          <PageTitle text="Filling statistics" />

          <PageTitle text="Filling history" />

          <div className="cards-container">
            {fillingHistory?.map((item, i) => (
              <FillingCard
                key={i}
                item={item}
                balance={currentUser?.wallet?.amount}
              />
            ))}
          </div>
        </>
      )}

      <style jsx>{`
        .no-history {
          ${styles.flexJustifycenter};
          padding-top: 5rem;
        }
        .cards-container {
          padding: 0.6rem;
          ${styles.flexBothcenter};
          flex-wrap: wrap;
          gap: 0.6rem;
          padding-bottom: 2rem;
        }
      `}</style>
    </>
  );
}
