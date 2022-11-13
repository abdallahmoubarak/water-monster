import Table from "@/components/admin/Table";
import Select from "@/components/Select";
import { useGetUsers } from "@/hooks/useUser";
import filter from "@/utils/search";
import { styles } from "@/utils/styles";
import { useEffect, useState } from "react";

export default function Users() {
  const [selectedType, setSelectedType] = useState("");
  const { data: users } = useGetUsers();
  const [displayedUsers, setDisplayedUsers] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    users && setDisplayedUsers(users);
  }, [users]);

  useEffect(() => {
    users &&
      setDisplayedUsers(
        filter({ list: users, value: selectedType, searchFields: ["Type"] }),
      );
  }, [users, selectedType]);

  useEffect(() => {
    users &&
      setDisplayedUsers(
        filter({ list: users, value: searchInput, searchFields }),
      );
  }, [users, searchInput]);

  return (
    <>
      <div className="page">
        <div className="head-container">
          <div className="input-container">
            <input
              className="search-input"
              placeholder="Search"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
          </div>
          <div className="select-contianer">
            <Select
              name="User type"
              options={options}
              setSelected={setSelectedType}
              selected={selectedType}
            />
          </div>
        </div>
        <Table header={header} rows={displayedUsers} />
      </div>
      <style jsx>{`
        .page {
          height: 100%;
          overflow: auto;
          padding: 1rem 0.6rem;
        }
        .head-container {
          ${styles.flexAligncenter};
          flex-wrap: wrap;
          gap: 1rem;
          padding: 1rem 0rem;
        }
        .select-contianer {
          flex: 1 0 20rem;
        }
        .input-container {
          flex: 1 0 20rem;
        }
        .search-input {
          width: 100%;
          padding: 1rem;
          ${styles.fontSize1p2rem};
          ${styles.borderRadiusp3rem};
          border: 1px solid gray;
        }
      `}</style>
    </>
  );
}
const header = ["Type", "Name"];
const options = ["Client", "Provider"];
const searchFields = ["Name"];
