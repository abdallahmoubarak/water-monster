import { styles } from "@/utils/styles";
import { FaEye, FaRegEdit } from "react-icons/fa";
export default function Table({
  header,
  rows,
  handleEditClick,
  handleViewClick,
  canEdit,
}) {
  return (
    <>
      <div className="table-container">
        <table>
          <thead>
            <tr className="head">
              {header?.map((item, i) => (
                <th key={i}>{item}</th>
              ))}
              {canEdit && <th className="head view">Edit</th>}
              <th className="head view">View</th>
            </tr>
          </thead>
          <tbody>
            {rows?.map((item, j) => (
              <tr key={j}>
                {header?.map((head, k) => (
                  <td key={k}>
                    <span className="td-title">{head}</span>
                    <span className="td-item">
                      {item[head.toLowerCase()] || "-"}
                    </span>
                  </td>
                ))}
                {canEdit && (
                  <td
                    className="view"
                    onClick={() => handleEditClick && handleEditClick(item)}>
                    <FaRegEdit />
                  </td>
                )}
                <td
                  className="view"
                  onClick={() => handleViewClick && handleViewClick(item)}>
                  <FaEye />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <style jsx>{`
        .table-container {
          max-width: 100%;
          border: 1px solid ${styles.primaryColor};
          border-width: 0px 1px 1px 1px;
          border-radius: 0.5rem;
        }
        table {
          border-spacing: 1;
          border-collapse: collapse;
          background: white;
          border-radius: 0.5rem;
          overflow: hidden;
          width: 100%;
          position: relative;
        }
        table * {
          position: relative;
        }
        table td,
        table th {
          padding: 0.5rem;
        }
        table thead tr {
          height: 3rem;
          background: ${styles.primaryColor};
        }
        table tbody tr {
          height: 3rem;
        }
        table tbody tr:last-child {
          border: 0;
        }
        table td,
        table th {
          text-align: left;
        }

        .head th {
          font-size: 1.2rem;
          color: #fff;
          font-weight: unset;
        }

        tbody tr:nth-child(even) {
          background-color: #f5f5f5;
        }

        tbody tr {
          font-size: 1rem;
          color: #808080;
          font-weight: unset;
          text-align: center;
        }

        tbody tr:hover {
          color: #555555;
          background-color: #f5f5f5;
          cursor: pointer;
        }
        .td-title {
          display: none;
        }

        table th.view {
          ${styles.fontSizep8rem};
        }
        table td.view {
          text-align: center;
          width: 2rem;
        }
      `}</style>
    </>
  );
}
