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
      <TopBar withImg={withImg} setActive={setActive} />
      <div className="app-body">{children}</div>
      <div>{withNav && <NavBar active={active} setActive={setActive} />}</div>
      <style jsx>{`
        .app {
          ${styles.flexColumn};
          height: 100vh;
          overflow: hidden;
        }
        .app-body {
          height: calc(100vh - 10rem);
          overflow: auto;
        }
      `}</style>
    </div>
  );
}
