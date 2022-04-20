import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import NavigationButtonList from '../NavigationButtonList';

const Menu = () => {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  const onClick = () => {
    setIsOpened((isOpened) => !isOpened);
  };

  return (
    <div className="block sm:hidden">
      <button onClick={onClick}>
        <MenuIcon fontSize="large" />
      </button>
      <div
        className={`${
          isOpened ? 'absolute' : 'hidden'
        } top-0 left-0 w-screen h-screen bg-black opacity-90`}
        onClick={onClick}
      >
        <button className="absolute right-4 h-14 text-white">
          <CloseIcon fontSize="large" />
        </button>
        <div className="w-full h-full flex flex-col justify-center items-center">
          <NavigationButtonList
            direction="col"
            className="text-3xl text-white gap-10"
          />
        </div>
      </div>
    </div>
  );
};

export default Menu;
