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
import { io } from "socket.io-client";
import Admin from "./Admin";
import { useCurrentUser } from "@/hooks/useAuth";
import Call from "@/components/Call";

export default function Home() {
  const [page, setPageName] = useState("Containers");
  const [chatUser, setChatUser] = useState({});
  const [pageId, setPageId] = useState("");
  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [call, setCall] = useState(true);
  const { data: currentUser } = useCurrentUser({ enabled: true });

  const setPage = (name, id) => {
    setPageName(name);
    setPageId(id);
  };

  useEffect(() => {
    setSocket(io(process.env.NEXT_PUBLIC_BASEURL, { path: "/api/socketio" }));
  }, []);

  useEffect(() => {
    let userId = currentUser?.id;
    socket?.on("connect", () => {
      console.log("SOCKET CONNECTED!", socket?.id);
      currentUser && socket?.emit("addUser", userId);

      socket?.on("getUsers", (users) => {
        setOnlineUsers(users);
      });

      socket?.on("getCall", ({ callerId, callerName }) => {
        setChatUser({ id: callerId, name: callerName });
        setPage("Call");
        setCall(true);
      });

      if (socket) return () => socket?.disconnect();
    });
  }, [socket]);

  useEffect(() => {
    currentUser.type === "Admin" && setPage("Admin");
  }, [currentUser]);

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
              {currentUser?.type === "Provider" ? (
                <MapPage
                  setPage={setPage}
                  userType={currentUser?.type}
                  setChatUser={setChatUser}
                />
              ) : (
                <Containers setPage={setPage} />
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
      {page === "Chat" && (
        <Chat setPage={setPage} user={chatUser} socket={socket} />
      )}
      {page === "Setting" && (
        <ContainerSetting setPage={setPage} containerId={pageId} />
      )}
      {page === "Profile" && <Profile setPage={setPage} />}
      {page === "Wallet" && <Wallet setPage={setPage} />}
      {page === "Admin" && <Admin onlineUsers={onlineUsers} socket={socket} />}
      {page === "Call" && (
        <Call
          call={call}
          setCall={setCall}
          user={chatUser}
          recieve={true}
          setPage={setPage}
          userType={currentUser.type}
          socket={socket}
        />
      )}
    </>
  );
}

const layoutPages = ["Statistics", "Containers", "Contacts"];
