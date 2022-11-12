import { useState } from "react";
import AdminLayout from "./layout";

export default function Admin() {
  const [active, setActive] = useState("Users");
  return (
    <AdminLayout active={active} setActive={setActive}>
      Hello Admin
    </AdminLayout>
  );
}
