import AdminNavBar from "@/components/admin/NavBar";
import TopBar from "@/components/TopBar";
import { styles } from "@/utils/styles";
import AdminLogout from "./logout";

export default function AdminLayout({ children, active, setActive }) {
  return (
    <>
      <div className="main-container">
        <TopBar />
        <div className="admin-container">
          <div className="nav-container">
            <AdminNavBar active={active} setActive={setActive} />
          </div>
          <div className="page-container">{children}</div>
        </div>
      </div>
      <AdminLogout />

      <style jsx>{`
        .main-container {
          height: 100vh;
          overflow: hidden;
        }
        .admin-container {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-orient: vertical;
          -webkit-box-direction: reverse;
          -ms-flex-direction: column-reverse;
          flex-direction: column-reverse;
          overflow: hidden;
          height: calc(100vh - 4rem);
        }
        .nav-container {
          ${styles.flexBothcenter};
          padding: 0.6rem;
        }
        .page-container {
          flex: 1 1;
          overflow: hidden;
          height: calc(100vh - 4rem);
        }

        @media only screen and (min-width: 40rem) {
          .admin-container {
            -webkit-box-orient: horizontal;
            -webkit-box-direction: normal;
            -ms-flex-direction: row;
            flex-direction: row;
          }
          .nav-container {
            height: calc(100vh - 8rem);
            padding: 1rem 0.6rem;
          }
        }
      `}</style>
    </>
  );
}
