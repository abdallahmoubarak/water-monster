import Layout from "./layout";
import { useState } from "react";
import Containers from "./Main/containers";
import Statistics from "./Main/statistics";
import Contacts from "./Main/contacts";
import Profile from "./Secoundary/profile";
import Head from "next/head";
import Chat from "./Secoundary/chat";
import ContainerSetting from "./Secoundary/containerSetting";
import Wallet from "./Secoundary/wallet";
import MapPage from "./Main/mapPage";

export default function Page({ currentUser }) {
  const [page, setPageName] = useState("Containers");
  const [chatUser, setChatUser] = useState({});
  const [pageId, setPageId] = useState("");

  const setPage = (name, id) => {
    setPageName(name);
    setPageId(id);
  };

  return (
    <>
      <Head>
        <title>{page}</title>
      </Head>

      {layoutPages.includes(page) && (
        <Layout withImg={true} withNav={true} active={page} setActive={setPage}>
          {page === "Statistics" && <Statistics />}
          {page === "Containers" && (
            <>
              {currentUser?.type === "Client" && (
                <Containers setPage={setPage} currentUser={currentUser} />
              )}
              {currentUser?.type === "Provider" && (
                <MapPage setPage={setPage} currentUser={currentUser} />
              )}
            </>
          )}

          {page === "Contacts" && (
            <Contacts
              setPage={setPage}
              chatUser={chatUser}
              setChatUser={setChatUser}
            />
          )}
        </Layout>
      )}
      {page === "Profile" && (
        <Profile setPage={setPage} currentUser={currentUser} />
      )}
      {page === "Chat" && <Chat setPage={setPage} user={chatUser} />}
      {page === "Setting" && (
        <ContainerSetting setPage={setPage} containerId={pageId} />
      )}
      {page === "Wallet" && (
        <Wallet setPage={setPage} currentUser={currentUser} />
      )}
    </>
  );
}

const layoutPages = ["Statistics", "Containers", "Contacts"];
