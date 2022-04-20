import Link from 'next/link';

interface Props {
  href: string;
  text: string;
  className?: string;
}

const NavigationButton = ({ href, text, className = '' }: Props) => {
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
