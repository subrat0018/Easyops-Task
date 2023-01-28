import React from "react";
import { useState } from "react";

const SearchResults = ({ found, searches }) => {
  if (found === -2) return <div></div>;
  if (found === -1)
    return (
      <div className="text-red-500 mt-8 font-semibold">Search not found!!!</div>
    );
  return (
    <div className="mt-8">
      {searches.map((item, index) => {
        return (
          <div className="flex flex-row justify-between items-center border mt-2 border-r-amber-300 bg-gray-50 rounded-xl">
            <div>{index + 1}.</div>
            <div>{item["name"]}</div>
            <div>{item["contactNo"]}</div>
          </div>
        );
      })}
    </div>
  );
};
const SearchBar = ({ contents }) => {
  const [searchName, setSearchName] = useState("");
  const [found, setFound] = useState(-2);
  const [searches, setSearches] = useState([]);
  return (
    <div>
      <form className="flex items-center">
        <label for="simple-search" className="sr-only">
          Search
        </label>
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            id="simple-search"
            onChange={(e) => {
              setSearchName(e.target.value.toUpperCase());
              setSearches([]);
            }}
            value={searchName}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search"
            required
          />
        </div>
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            if (searchName === "") return;
            const temp = [];
            let ok = 0;
            for (let i = 0; i < contents.length; i++) {
              let Name = contents[i]["name"].toUpperCase();

              if (Name.includes(searchName)) {
                ok = 1;
                temp.push(contents[i]);
              }
            }
            if (ok === 0) setFound(-1);
            else {
              setFound(1);
              setSearches([...temp]);
            }
            setSearchName("");
          }}
          className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
          <span className="sr-only">Search</span>
        </button>
      </form>
      <SearchResults found={found} searches={searches} />
    </div>
  );
};

export default SearchBar;
