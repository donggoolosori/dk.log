import Tag from './Tag/Tag';

interface Props {
  tags?: string[];
}

const Tags = ({ tags }: Props) => {
  return (
    <ul className="text-sm flex justify-start items-center gap-3 w-full h-6 overflow-scroll">
      {tags?.map((tag, idx) => (
        <Tag key={tag + idx} tag={tag} />
      ))}
    </ul>
  );
};

export default Tags;
