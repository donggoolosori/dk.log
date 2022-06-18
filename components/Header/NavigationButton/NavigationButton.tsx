import Link from 'next/link';
import { FC } from 'react';

interface Props {
  href: string;
  text: string;
  className?: string;
}

const NavigationButton: FC<Props> = ({ href, text, className = '' }) => {
  return (
    <div
      className={`hover:text-indigo-500 dark:hover:text-indigo-300 ${className}`}
    >
      <Link href={href}>
        <a>{text}</a>
      </Link>
    </div>
  );
};

export default NavigationButton;
