import Tag from '@components/Tag';

interface Props {
  tags?: string[];
}

const Tags = ({ tags }: Props) => {
  return (
    <ul className="text-sm flex justify-start items-center gap-3 w-full flex-wrap max-h-24 max-w-2xl overflow-y-scroll">
      {tags?.map((tag, idx) => (
        <Tag
          key={tag + idx}
          tag={tag}
          className="hover:bg-blue-400 dark:hover:bg-indigo-800"
        />
      ))}
    </ul>
  );
};

export default Tags;
