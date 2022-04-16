interface Props {
  tag: string;
  count?: number;
  className?: string;
}

const Tag = ({ tag, count, className }: Props) => {
  return (
    <li
      className={`rounded-xl px-3 py-[2px] flex gap-2 cursor-pointer bg-blue-700 ${className}`}
    >
      <span>{tag}</span>
      {count && <span className="text-xs">{count}</span>}
    </li>
  );
};

export default Tag;
