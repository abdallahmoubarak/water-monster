import Layout from "./layout";
import { useEffect, useState } from "react";
import Containers from "./Main/containers";
import Statistics from "./Main/statistics";
import Contacts from "./Main/contacts";
import Profile from "./Secoundary/profile";
import Head from "next/head";
import Chat from "./Secoundary/chat";
import ContainerSetting from "./Secoundary/containerSetting";
import Wallet from "./Secoundary/wallet";
import MapPage from "./Main/mapPage";
import SocketIOClient from "socket.io-client";

export default function Page({ currentUser }) {
  const [page, setPageName] = useState("Containers");
  const [chatUser, setChatUser] = useState({});
  const [pageId, setPageId] = useState("");
  const [connected, setConnected] = useState(false);
  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);

  const setPage = (name, id) => {
    setPageName(name);
    setPageId(id);
  };

  useEffect(() => {
    setSocket(
      SocketIOClient.connect(process.env.NEXT_PUBLIC_BASEURL, {
        path: "/api/socketio",
      }),
    );
  }, []);

  useEffect(() => {
    socket?.on("connect", () => {
      console.log("SOCKET CONNECTED!", socket?.id);
      setConnected(true);
    });
  }, [socket]);

  useEffect(() => {
    let userId = currentUser?.id;
    currentUser && socket?.emit("addUser", userId);

    socket?.on("getUsers", (users) => {
      setOnlineUsers(users);
      console.log(users);
    });

    if (socket) return () => socket?.disconnect();
  }, [currentUser, socket]);

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
              socket={socket}
              onlineUsers={onlineUsers}
            />
          )}
        </Layout>
      )}
      {page === "Profile" && (
        <Profile setPage={setPage} currentUser={currentUser} />
      )}
      {page === "Chat" && (
        <Chat setPage={setPage} user={chatUser} socket={socket} />
      )}
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
