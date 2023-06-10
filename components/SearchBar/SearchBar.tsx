"use client";

import SearchIcon from "@mui/icons-material/Search";
import { ChangeEvent, FC, useState } from "react";

interface Props {
  onChange?: any;
}

const SearchBar: FC<Props> = ({ onChange }) => {
  const [inputValue, setInputValue] = useState<string>("");

  const onChangeHandler = (e: ChangeEvent) => {
    const { value } = e.target as HTMLInputElement;
    setInputValue(value);
    onChange && onChange(e);
  };

  return (
    <div className="flex items-center w-full max-w-lg relative">
      <SearchIcon className="absolute text-3xl right-4 dark:text-slate-800" />
      <input
        value={inputValue}
        onChange={onChangeHandler}
        className="border-4 border-indigo-300 focus:border-indigo-600 rounded-2xl w-full px-6 py-3 text-xl outline-none dark:bg-slate-500 dark:placeholder:text-slate-800"
        placeholder="Search Posts"
      />
    </div>
  );
};

export default SearchBar;
