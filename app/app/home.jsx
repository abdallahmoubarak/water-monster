import Layout from "./layout";
import { useState } from "react";
import Containers from "./Main/containers";
import Statistics from "./Main/statistics";
import Contacts from "./Main/contacts";
import Profile from "./profile";
import Head from "next/head";
import Chat from "./chat";

export default function Page() {
  const [page, setPage] = useState("Containers");
  const [chatUser, setChatUser] = useState({});

  return (
    <>
      <Head>
        <title>{page}</title>
      </Head>

      {layoutPages.includes(page) && (
        <Layout withImg={true} withNav={true} active={page} setActive={setPage}>
          {page === "Statistics" && <Statistics />}
          {page === "Containers" && <Containers />}
          {page === "Contacts" && (
            <Contacts
              setPage={setPage}
              chatUser={chatUser}
              setChatUser={setChatUser}
            />
          )}
          {page === "Profile" && <Profile />}
        </Layout>
      )}
      {page === "Chat" && <Chat setPage={setPage} user={chatUser} />}
    </>
  );
}

const layoutPages = ["Statistics", "Containers", "Contacts", "Profile"];
