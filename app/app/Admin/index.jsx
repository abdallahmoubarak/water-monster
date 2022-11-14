import { useState } from "react";
import Contacts from "../Main/contacts";
import MapPage from "../Main/mapPage";
import Statistics from "../Main/statistics";
import Chat from "../Secoundary/chat";
import AdminLayout from "./layout";
import Requests from "./requests";
import Users from "./users";

export default function Admin({ socket, onlineUsers }) {
  const [active, setActive] = useState("Users");
  const [chatUser, setChatUser] = useState([]);
  return (
    <>
      {layoutPages.includes(active) && (
        <AdminLayout active={active} setActive={setActive}>
          {active === "Users" && <Users />}
          {active === "Requests" && <Requests />}
          {active === "Contacts" && (
            <Contacts
              chatUser={chatUser}
              setChatUser={setChatUser}
              onlineUsers={onlineUsers}
              setPage={setActive}
            />
          )}
          {active === "Statistics" && <Statistics />}
          {active === "Map" && <MapPage setPage={setActive} />}
        </AdminLayout>
      )}
      {active === "Chat" && (
        <Chat setPage={setActive} user={chatUser} socket={socket} />
      )}
    </>
  );
}

const layoutPages = ["Users", "Requests", "Contacts", "Statistics", "Map"];
