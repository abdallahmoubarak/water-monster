import TopBar from "../components/TopBar";
import { styles } from "../util/styles";

export default function Layout({ children }) {
  return (
    <div className="app">
      <TopBar />
      <div className="app-body">{children}</div>

      <style jsx>{`
        .app {
          ${styles.flexColumn};
          height: 100vh;
          overflow: hidden;
        }
        .app-body {
          flex: 0 1 100%;
          overflow-y: auto;
        }
      `}</style>
    </div>
  );
}
