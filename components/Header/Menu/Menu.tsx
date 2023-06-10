"use client";

import { AiOutlineMenu } from "@react-icons/all-files/ai/AiOutlineMenu";
import { AiOutlineClose } from "@react-icons/all-files/ai/AiOutlineClose";
import NavigationButtonList from "../NavigationButtonList";
import { useState } from "react";

const Menu = () => {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  const onClick = () => {
    setIsOpened((isOpened) => !isOpened);
  };

  return (
    <div className="block sm:hidden">
      <button onClick={onClick} aria-label="Show Menu">
        <AiOutlineMenu fontSize="large" />
      </button>
      <div
        className={`${
          isOpened ? "absolute" : "hidden"
        } top-0 left-0 w-screen h-screen bg-black opacity-90`}
        onClick={onClick}>
        <button
          className="absolute right-4 h-14 text-white"
          aria-label="Close Menu">
          <AiOutlineClose fontSize="large" />
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
