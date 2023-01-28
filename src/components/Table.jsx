import React from "react";
import { useState } from "react";
const Row = ({
  no,
  name,
  contact,
  sortedContents,
  setSortedContents,
  contents,
  setContents,
}) => {
  return (
    <tr className="border-b border-gray-200 dark:border-gray-700">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
      >
        {no}
      </th>
      <td className="px-6 py-4">{name}</td>
      <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">{contact}</td>
      <td
        className="px-6 py-4 cursor-pointer hover:bg-gray-200"
        onClick={() => {
          alert("The data of the user will be permanently deleted");
          let index1 = -1;
          let index2 = -1;
          for (let i = 0; i < contents.length; i++) {
            if (
              contents[i]["name"] === name &&
              contents[i]["contactNo"] === contact
            ) {
              index1 = i;
            }
            if (
              sortedContents[i]["name"] === name &&
              sortedContents[i]["contactNo"] === contact
            ) {
              index2 = i;
            }
          }
          if (index1 !== -1)
            setContents(
              contents.slice(0, index1).concat(contents.slice(index1 + 1))
            );
          if (index2 !== -1)
            setSortedContents(
              sortedContents
                .slice(0, index2)
                .concat(sortedContents.slice(index2 + 1))
            );
        }}
      >
        X
      </td>
    </tr>
  );
};
const Table = ({
  sortedContents,
  contents,
  setContents,
  setSortedContents,
}) => {
  const [turn, setTurn] = useState(false);
  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                S.No
              </th>
              <th
                onClick={() => {
                  setTurn(!turn);
                }}
                scope="col"
                className="px-6 py-3 cursor-pointer hover:bg-gray-200"
              >
                Name
              </th>
              <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                Contact
              </th>
              <th scope="col" className="px-6 py-3">
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {turn
              ? sortedContents.map((item, index) => {
                  return (
                    <Row
                      no={index + 1}
                      key={index}
                      name={item["name"]}
                      contact={item["contactNo"]}
                      sortedContents={sortedContents}
                      setSortedContents={setSortedContents}
                      contents={contents}
                      setContents={setContents}
                    />
                  );
                })
              : contents.map((item, index) => {
                  return (
                    <Row
                      no={index + 1}
                      key={index}
                      name={item["name"]}
                      contact={item["contactNo"]}
                      sortedContents={sortedContents}
                      setSortedContents={setSortedContents}
                      contents={contents}
                      setContents={setContents}
                    />
                  );
                })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
