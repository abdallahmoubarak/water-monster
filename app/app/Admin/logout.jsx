import { graphQLClient } from "@/utils/graphQLInstance";
import { client } from "pages/_app";

export default function AdminLogout() {
  return (
    <>
      <div
        className="admin-logout"
        onClick={() => {
          localStorage.removeItem("JWT");
          localStorage.removeItem("User");
          client.setQueryData(["User"], null);
          graphQLClient.setHeaders({ authorization: undefined });
        }}>
        Logout
      </div>
      <style jsx>{`
        .admin-logout {
          position: absolute;
          top: 0.4rem;
          right: 0.4rem;
          padding: 1rem;
          z-index: 100;
          color: white;
          cursor: pointer;
        }
      `}</style>
    </>
  );
}
