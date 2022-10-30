import NavBar from "@/components/NavBar";
import TopBar from "@/components/TopBar";
import { styles } from "@/utils/styles";

export default function Layout({
  children,
  withImg,
  withNav,
  active,
  setActive,
}) {
  return (
    <div className="app">
      <TopBar withImg={withImg} />
      <div className="app-body">{children}</div>
      {withNav && <NavBar active={active} setActive={setActive} />}

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
