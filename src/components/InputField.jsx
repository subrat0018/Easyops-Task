import React from "react";

const InputField = ({ name, placeholder, id, form, setForm }) => {
  return (
    <div class="mb-6">
      <label
        htmlFor="default-input"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {name}
      </label>
      <input
        type={id === "contactNo" ? "number" : "text"}
        id="default-input"
        placeholder={placeholder}
        onChange={(e) => {
          setForm({ ...form, [id]: e.target.value });
        }}
        value={form[id]}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
    </div>
  );
};

export default InputField;
