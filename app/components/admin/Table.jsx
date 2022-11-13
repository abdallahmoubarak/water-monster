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
                <th key={i} className="column">
                  {item}
                </th>
              ))}
              {canEdit && <th className="head s">Edit</th>}
              <th className="head s">View</th>
            </tr>
          </thead>
          <tbody>
            {rows?.map((item, j) => (
              <tr key={j}>
                {header?.map((head, k) => (
                  <td key={k} className="column">
                    <span className="td-title">{head}</span>
                    <span className="td-item">
                      {item[head.toLowerCase()] || "-"}
                    </span>
                  </td>
                ))}
                {canEdit && (
                  <td className="column" onClick={() => handleEditClick(item)}>
                    <FaRegEdit />
                  </td>
                )}
                <td className="column" onClick={() => handleViewClick(item)}>
                  <FaEye />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <style jsx="true">{`
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
        table td.l,
        table th.l {
          text-align: right;
        }
        table td.c,
        table th.c {
          text-align: center;
        }
        table td.r,
        table th.r {
          text-align: center;
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
        .s {
          font-size: 0.8rem !important;
        }

        @media screen and (max-width: 700px) {
          .table-container {
            border-width: 1px;
          }
          table {
            display: block;
          }
          table > *,
          table tr,
          table td,
          table th,
          .td-title {
            display: block;
          }
          table thead {
            display: none;
          }
          table tbody tr {
            height: auto;
            padding: 1.2rem 0;
          }
          table tbody tr td {
            display: flex;
            align-items: flex-start;
          }
          table tbody tr td .td-item {
            flex: 1 1 100%;
          }
          .td-title {
            font-size: 0.9rem;
            color: ${styles.primaryColor};
            font-weight: 600;
            padding: auto 1rem;
            flex: 1 1 50%;
          }
          tr {
          }
          .column {
            text-align: left;
            width: 100%;
          }
        }
      `}</style>
    </>
  );
}
