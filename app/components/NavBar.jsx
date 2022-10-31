import statistics from "@/public/svg/statistics.svg";
import containers from "@/public/svg/containers.svg";
import chats from "@/public/svg/chats.svg";
import Image from "next/image";

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
              <div className="circule-back" id="circule-back"></div>
              <div className="circule" id="circule"></div>
            </>
          )}
        </ul>
      </div>
      <style jsx>{`
        .nav-container {
          background-color: var(--primary-color);
          color: white;
          position: fixed;
          bottom: 0;
          width: 100%;
          max-width: 100%;
        }
        .circule-back {
          content: "";
          position: absolute;
          top: -1.2rem;
          left: 0;
          width: 100%;
          height: 1.2rem;
          background-color: white;
          z-index: 0;
        }

        .nav-ul {
          display: flex;
          align-items: center;
          justify-content: space-evenly;
          position: relative;
        }

        .nav-li {
          display: flex;
          align-items: center;
          flex-direction: column;
          cursor: pointer;
          position: relative;
          justify-content: center;
          padding: 1rem;
        }

        .nav-icon {
          width: 2.2rem;
          height: 2.2rem;
          transition: all 0.3s ease-out;
          -webkit-transition: all 0.3s ease-out;
          -moz-transition: all 0.3s ease-out;
          -ms-transition: all 0.3s ease-out;
          -o-transition: all 0.3s ease-out;
        }

        .nav-ul li.active .nav-icon {
          transform: translateY(-2.1rem);
          -webkit-transform: translateY(-2.1rem);
          -moz-transform: translateY(-2.1rem);
          -ms-transform: translateY(-2.1rem);
          -o-transform: translateY(-2.1rem);
          transition: all 0.3s ease-out;
          -webkit-transition: all 0.3s ease-out;
          -moz-transition: all 0.3s ease-out;
          -ms-transition: all 0.3s ease-out;
          -o-transition: all 0.3s ease-out;
          z-index: 4;
        }

        .nav-ul li.active .nav-text {
          opacity: 1;
          transition: all 0.3s ease-out;
          -webkit-transition: all 0.3s ease-out;
          -moz-transition: all 0.3s ease-out;
          -ms-transition: all 0.3s ease-out;
          -o-transition: all 0.3s ease-out;
        }

        .nav-text {
          position: absolute;
          opacity: 0;
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
          background: var(--primary-color);
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
          transform: translateX(calc(25vw - 3rem));
          -webkit-transform: translateX(calc(25vw - 3rem));
          -moz-transform: translateX(calc(25vw - 3rem));
          -ms-transform: translateX(calc(25vw - 3rem));
          -o-transform: translateX(calc(25vw - 3rem));
          transition: all 0.3s ease-out;
          -webkit-transition: all 0.3s ease-out;
          -moz-transition: all 0.3s ease-out;
          -ms-transition: all 0.3s ease-out;
          -o-transition: all 0.3s ease-out;
        }

        .nav-ul li:nth-child(2).active ~ .circule {
          transform: translateX(calc(50vw - 2.15rem));
          -webkit-transform: translateX(calc(50vw - 2.15rem));
          -moz-transform: translateX(calc(50vw - 2.15rem));
          -ms-transform: translateX(calc(50vw - 2.15rem));
          -o-transform: translateX(calc(50vw - 2.15rem));
          transition: all 0.3s ease-out;
          -webkit-transition: all 0.3s ease-out;
          -moz-transition: all 0.3s ease-out;
          -ms-transition: all 0.3s ease-out;
          -o-transition: all 0.3s ease-out;
        }

        .nav-ul li:nth-child(3).active ~ .circule {
          transform: translateX(calc(75vw - 1.05rem));
          -webkit-transform: translateX(calc(75vw - 1.05rem));
          -moz-transform: translateX(calc(75vw - 1.05rem));
          -ms-transform: translateX(calc(75vw - 1.05rem));
          -o-transform: translateX(calc(75vw - 1.05rem));
          transition: all 0.3s ease-out;
          -webkit-transition: all 0.3s ease-out;
          -moz-transition: all 0.3s ease-out;
          -ms-transition: all 0.3s ease-out;
          -o-transition: all 0.3s ease-out;
        }
      `}</style>
    </>
  );
}
const navItems = [
  { name: "Statistics", img: statistics },
  { name: "Containers", img: containers },
  { name: "Chats", img: chats },
];
