"use client";

import { AiOutlineSearch } from "@react-icons/all-files/ai/AiOutlineSearch";
import { ChangeEvent, FC, useState } from "react";

interface Props {
  onChange?: (e: ChangeEvent) => void;
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
      <AiOutlineSearch className="absolute text-3xl right-4 dark:text-slate-800" />
      <input
        value={inputValue}
        onChange={onChangeHandler}
        className="input input-bordered input-primary input-lg border-4 rounded-2xl w-full px-6 py-3"
        placeholder="Search Posts"
      />
    </div>
  );
};

export default SearchBar;
