import Layout from "./layout";
import { useState } from "react";

export default function Home() {
  const [active, setActive] = useState("Containers");
  return (
    <>
      <Layout
        withImg={true}
        withNav={true}
        active={active}
        setActive={setActive}>
        {active === "Statistics" && "Hellooo Water Monster I am Statistics"}
        {active === "Containers" && "Hellooo Water Monster I am Containers"}
        {active === "Chats" && "Hellooo Water Monster I am Chats"}
      </Layout>
    </>
  );
}
