import { styles } from "@/utils/styles";
import Logo from "./SVG/Logo";

export default function TopBar({ withImg }) {
  return (
    <>
      <div className="top-bar">
        <div className="logo">
          <Logo />
        </div>
        {withImg && <div className="profile-image"></div>}
      </div>

      <style jsx>{`
        .top-bar {
          background: ${styles.primaryColor};
          padding: 0.6rem 1.2rem;
          height: 4rem;
          ${styles.flexAligncenter};
          ${styles.justifyBetween};
          gap: 1rem;
        }
        .logo {
          height: 100%;
        }
        .profile-image {
          background: white;
          width: 3rem;
          height: 3rem;
          border-radius: 50%;
          -webkit-border-radius: 50%;
          -moz-border-radius: 50%;
          -ms-border-radius: 50%;
          -o-border-radius: 50%;
        }
      `}</style>
    </>
  );
}
