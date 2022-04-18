import SearchIcon from '@mui/icons-material/Search';
import { ChangeEvent, useState } from 'react';

interface Props {
  onChange?: any;
}

const SearchBar = ({ onChange }: Props) => {
  const [inputValue, setInputValue] = useState<string>('');

  const onChangeHandler = (e: ChangeEvent) => {
    const { value } = e.target as HTMLInputElement;
    setInputValue(value);
    onChange && onChange(e);
  };

  return (
    <div className="flex items-center w-full max-w-lg relative">
      <SearchIcon className="absolute text-3xl right-4" />
      <input
        value={inputValue}
        onChange={onChangeHandler}
        className="border-2 rounded-2xl w-full px-6 py-3 text-xl outline-none focus:border-sky-500"
        placeholder="Search Posts"
      />
    </div>
  );
};

export default SearchBar;
