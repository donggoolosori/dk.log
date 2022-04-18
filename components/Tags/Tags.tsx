import Tag from '@components/Tag';

interface Props {
  tags?: string[];
}

const Tags = ({ tags }: Props) => {
  return (
    <ul className="text-sm flex justify-start items-center gap-3 w-full h-6 overflow-scroll">
      {tags?.map((tag, idx) => (
        <Tag key={tag + idx} tag={tag} className="hover:bg-blue-400" />
      ))}
    </ul>
  );
};

export default Tags;
