import { styles } from "@/utils/styles";

export default function Switch({ icon, title, description, on, setOn }) {
  return (
    <>
      <div>
        <div className="switch-container">
          <div className="title">
            <div>{icon}</div>
            <div>{title}</div>
          </div>
          <div className="switch" onClick={() => setOn(!on)}>
            <div className="circul"></div>
          </div>
        </div>
        <div className="description">{description}</div>
      </div>
      <style jsx>{`
        .switch-container {
          padding: 0rem 0.3rem;
          position: relative;
          width: 100%;
          flex: 1 1;
          ${styles.flexAligncenter};
          ${styles.justifyBetween};
        }
        .title {
          color: ${styles.primaryColor};
          font-size: 1.2rem;
          ${styles.flexAligncenter};
          gap: 0.3rem;
        }
        .switch {
          width: 3rem;
          height: 1.6rem;
          ${styles.borderRadius1rem};
          border: 1px solid lightgray;
          cursor: pointer;
          ${styles.flexAligncenter};
          ${on &&
          "-webkit-box-orient: horizontal;-webkit-box-direction: reverse;-ms-flex-direction: row-reverse; flex-direction: row-reverse;"}
        }
        .circul {
          width: 1.6rem;
          height: 1.6rem;
          ${styles.borderRadius50percent};
          background: ${on ? styles.primaryColor : "gray"};
        }
        .description {
          color: gray;
          font-size: 0.8rem;
          padding: 0rem 0.3rem;
        }
      `}</style>
    </>
  );
}
