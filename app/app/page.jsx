import Layout from "./layout";
import { useState } from "react";
import Containers from "./Main/containers";
import Statistics from "./Main/statistics";
import Contacts from "./Main/contacts";
import Profile from "./profile";
import Head from "next/head";

export default function Page() {
  const [page, setPage] = useState("Containers");
  return (
    <>
      <Head>
        <title>{page}</title>
      </Head>

      <Layout withImg={true} withNav={true} active={page} setActive={setPage}>
        {page === "Statistics" && <Statistics />}
        {page === "Containers" && <Containers />}
        {page === "Contacts" && <Contacts />}
        {page === "Profile" && <Profile />}
      </Layout>
    </>
  );
}
