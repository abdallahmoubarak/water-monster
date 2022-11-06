import Layout from "./layout";
import { useState } from "react";
import Containers from "./Main/containers";
import Statistics from "./Main/statistics";
import Contacts from "./Main/contacts";
import Profile from "./profile";
import Head from "next/head";
import Chat from "./Secoundary/chat";
import ContainerSetting from "./Secoundary/containerSetting";

export default function Page({ currentUser }) {
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
          {page === "Containers" && (
            <Containers setPage={setPage} currentUser={currentUser} />
          )}
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
      {page === "Setting" && <ContainerSetting setPage={setPage} />}
    </>
  );
}

const layoutPages = ["Statistics", "Containers", "Contacts", "Profile"];
