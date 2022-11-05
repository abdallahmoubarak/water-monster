import statistics from "@/public/svg/statistics.svg";
import containers from "@/public/svg/containers.svg";
import chats from "@/public/svg/chats.svg";
import Image from "next/image";
import { styles } from "@/utils/styles";

export default function NavBar({ active = "Containers", setActive }) {
  return (
    <>
      <div className="nav-container">
        <ul className="nav-ul">
          {navItems.map((item, i) => (
            <li
              key={i}
              className={`nav-li ${active === item.name && "active"}`}
              onClick={() => setActive(item.name)}>
              <div className="nav-icon">
                <Image src={item.img} alt={item.name} height={33} />
              </div>
              <span className="nav-text">{item.name}</span>
            </li>
          ))}
          {Boolean(navItems.filter((item) => item.name === active)[0]) && (
            <>
              <div className="circule-back"></div>
              <div className="circule"></div>
            </>
          )}
        </ul>
      </div>
      <style jsx>{`
        .nav-container {
          background: ${styles.primaryColor};
          color: white;
          position: fixed;
          bottom: 0;
          width: 100%;
          max-width: 100%;
        }

        .circule-back {
          content: "";
          position: absolute;
          top: -0.4rem;
          left: 0;
          width: 100%;
          height: 0.4rem;
          background-color: white;
          z-index: 0;
        }

        .nav-ul {
          ${styles.flexAligncenter};
          justify-content: space-evenly;
          gap: 2rem;
          position: relative;
        }

        .nav-li {
          ${styles.flexBothcenter};
          ${styles.flexColumn};
          cursor: pointer;
          position: relative;
          padding: 1rem;
        }

        .nav-icon {
          width: 2.2rem;
          height: 2.2rem;
          ${styles.transitionAll3s};
        }

        .nav-ul li.active .nav-icon {
          transform: translateY(-2.1rem);
          -webkit-transform: translateY(-2.1rem);
          -moz-transform: translateY(-2.1rem);
          -ms-transform: translateY(-2.1rem);
          -o-transform: translateY(-2.1rem);
          ${styles.transitionAll3s};
          z-index: 4;
        }

        .nav-ul li.active .nav-text {
          opacity: 1;
          ${styles.transitionAll3s};
        }

        .nav-text {
          position: absolute;
          opacity: 0;
          color: white;
          transform: translateY(0.8rem);
          -webkit-transform: translateY(0.8rem);
          -moz-transform: translateY(0.8rem);
          -ms-transform: translateY(0.8rem);
          -o-transform: translateY(0.8rem);
        }

        .circule {
          position: absolute;
          top: -50%;
          width: 4rem;
          height: 4rem;
          background: ${styles.primaryColor};
          border-radius: 50%;
          border: 5px solid white;
          left: 0;
          z-index: 1;
        }

        .circule::before {
          content: "";
          position: absolute;
          top: 53%;
          left: -2.8rem;
          width: 2.8rem;
          height: 1.2rem;
          background: transparent;
          border-top-right-radius: 20rem;
          box-shadow: 1px -6px 0 white;
        }

        .circule::after {
          content: "";
          position: absolute;
          top: 53%;
          right: -2.8rem;
          width: 2.8rem;
          height: 1.2rem;
          background: transparent;
          border-top-left-radius: 20rem;
          box-shadow: -1px -6px 0 white;
        }

        .nav-ul li:nth-child(1).active ~ .circule {
          transform: translateX(calc(25vw - 4rem));
          -webkit-transform: translateX(calc(25vw - 4rem));
          -moz-transform: translateX(calc(25vw - 4rem));
          -ms-transform: translateX(calc(25vw - 4rem));
          -o-transform: translateX(calc(25vw - 4rem));
          ${styles.transitionAll3s};
        }

        .nav-ul li:nth-child(2).active ~ .circule {
          transform: translateX(calc(50vw - 2.15rem));
          -webkit-transform: translateX(calc(50vw - 2.15rem));
          -moz-transform: translateX(calc(50vw - 2.15rem));
          -ms-transform: translateX(calc(50vw - 2.15rem));
          -o-transform: translateX(calc(50vw - 2.15rem));
          ${styles.transitionAll3s};
        }

        .nav-ul li:nth-child(3).active ~ .circule {
          transform: translateX(calc(75vw - 0.05rem));
          -webkit-transform: translateX(calc(75vw - 0.05rem));
          -moz-transform: translateX(calc(75vw - 0.05rem));
          -ms-transform: translateX(calc(75vw - 0.05rem));
          -o-transform: translateX(calc(75vw - 0.05rem));
          ${styles.transitionAll3s};
        }
      `}</style>
    </>
  );
}
const navItems = [
  { name: "Statistics", img: statistics },
  { name: "Containers", img: containers },
  { name: "Contacts", img: chats },
];
