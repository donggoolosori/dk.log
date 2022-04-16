interface Props {
  tags?: string[];
}

const Tags = ({ tags }: Props) => {
  return (
    <ul className="text-sm flex justify-start items-center gap-3 w-full h-6 overflow-scroll">
      {tags?.map((tag, idx) => (
        <li key={tag + idx} className="border-2 rounded-xl px-3 flex">
          {tag}
        </li>
      ))}
    </ul>
  );
};

export default Tags;
