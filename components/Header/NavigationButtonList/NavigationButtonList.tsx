import { FC } from 'react';
import NavigationButton from '../NavigationButton/NavigationButton';

interface Props {
  direction?: string;
  className?: string;
}

const NavigationButtonList: FC<Props> = ({
  direction = 'row',
  className = '',
}) => {
  return (
    <div
      className={`flex flex-${direction} gap-6 justify-between items-center ${className}`}
    >
      <NavigationButton href="/" text="Home" />
      {/* <NavigationButton href="/projects" text="Projects" />
      <NavigationButton href="/about" text="About" /> */}
      <NavigationButton href="/posts" text="Posts" />
    </div>
  );
};

export default NavigationButtonList;
