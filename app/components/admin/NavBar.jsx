import statistics from "@/public/svg/statistics.svg";
import users from "@/public/svg/users.svg";
import chats from "@/public/svg/chats.svg";
import map from "@/public/svg/mapmarker.svg";
import requests from "@/public/svg/requests.svg";

import Image from "next/image";
import { styles } from "@/utils/styles";

export default function AdminNavBar({ active = "Requests", setActive }) {
  return (
    <>
      <div className="nav-container">
        <ul className="nav-ul">
          {navItems.map((item, i) => (
            <li key={i} className="nav-li" onClick={() => setActive(item.name)}>
              <div className={`nav-icon ${active === item.name && "active"}`}>
                <Image src={item.img} alt={item.name} height={33} />
              </div>
              <span
                className={`nav-text ${active === item.name && "active-txt"}`}>
                {item.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <style jsx>{`
        .nav-container {
          ${styles.boxshadow};
          ${styles.borderRadius1rem};
          background: white;
        }
        .nav-ul {
          padding: 0.3rem 1rem;
          ${styles.flexAligncenter};
          gap: 1rem;
        }
        .nav-li {
          ${styles.flexAligncenter};
          ${styles.flexColumn};
          gap: 0.2rem;
          cursor: pointer;
        }
        .nav-icon {
          ${styles.flexBothcenter};
          width: 2.8rem;
          height: 2.8rem;
          background: ${styles.grey};
          ${styles.borderRadius50percent};
        }
        .active {
          background: ${styles.primaryColor};
        }
        .nav-text {
          font-size: 0.7rem;
        }
        .active-txt {
          color: ${styles.primaryColor};
        }
        @media only screen and (min-width: 40rem) {
          .nav-ul {
            padding: 1rem 0.6rem;
            ${styles.flexAligncenter};
            ${styles.flexColumn};
            gap: 1rem;
          }
        }
      `}</style>
    </>
  );
}
const navItems = [
  { name: "Users", img: users },
  { name: "Requests", img: requests },
  { name: "Contacts", img: chats },
  { name: "Statistics", img: statistics },
  { name: "Map", img: map },
];
