import "./App.css";
import InputField from "./components/InputField";
import Button from "./components/Button";
import React from "react";
import { useState } from "react";
import SearchBar from "./components/SearchBar";
import Table from "./components/Table";

function App() {
  const [form, setForm] = useState({ first: "", last: "", contactNo: "" });
  const [contents, setContents] = useState([]);
  const [sortedContents, setSortedContents] = useState([]);
  return (
    <div className="flex flex-col justify-center items-center m-8">
      <form className="w-full">
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-row w-2/4 justify-between items-center">
            <div className="w-2/5">
              <InputField
                name={"First Name"}
                placeholder={"first"}
                id={"first"}
                form={form}
                setForm={setForm}
              />
            </div>
            <div className="w-2/5">
              <InputField
                name={"Last Name"}
                placeholder={"last"}
                id={"last"}
                form={form}
                setForm={setForm}
              />
            </div>
          </div>
          <div className="w-2/4">
            <InputField
              name={"Contact Number"}
              placeholder={"1234567890"}
              id={"contactNo"}
              form={form}
              setForm={setForm}
            />
          </div>
          <div className="w-1/4">
            <Button
              form={form}
              setForm={setForm}
              contents={contents}
              setContents={setContents}
              sortedContents={sortedContents}
              setSortedContents={setSortedContents}
            />
          </div>
        </div>
      </form>
      <div className="w-2/4 m-8">
        <SearchBar contents={contents} />
      </div>
      <div className="w-2/4">
        <Table
          contents={contents}
          setContents={setContents}
          sortedContents={sortedContents}
          setSortedContents={setSortedContents}
        />
      </div>
    </div>
  );
}

export default App;
