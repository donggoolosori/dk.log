import Link from "next/link";

interface Props {
  href: string;
  text: string;
  className?: string;
}

export default function NavigationButton({
  href,
  text,
  className = "",
}: Props) {
  return (
    <Link href={href} className={`hover:text-primary ${className}`}>
      {text}
    </Link>
  );
}
