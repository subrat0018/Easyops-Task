import React from "react";

const Button = ({
  form,
  setForm,
  contents,
  setContents,
  sortedContents,
  setSortedContents,
}) => {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        if (
          form["first"] === "" ||
          form["last"] === "" ||
          form["contactNo"] === "" ||
          form["contactNo"].length !== 10
        ) {
          alert("Please Enter a valid input");
          return;
        }
        const Name = form["first"] + " " + form["last"];
        const cinfo = form["contactNo"];
        for (let i = 0; i < contents.length; i++) {
          if (
            contents[i]["name"] === Name &&
            contents[i]["contactNo"] === cinfo
          ) {
            alert("Usert Already Exist");
            return;
          }
        }
        setContents([
          ...contents,
          {
            name: Name,
            contactNo: cinfo,
          },
        ]);
        setSortedContents(
          [
            ...sortedContents,
            {
              name: Name,
              contactNo: cinfo,
            },
          ].sort((a, b) => {
            const nameA = a.name.toUpperCase(); // ignore upper and lowercase
            const nameB = b.name.toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }

            // names must be equal
            return 0;
          })
        );
        setForm({ first: "", last: "", contactNo: "" });
      }}
      className="w-full relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
    >
      <span className="w-full relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
        Save
      </span>
    </button>
  );
};

export default Button;
