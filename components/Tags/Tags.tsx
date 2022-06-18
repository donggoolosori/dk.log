import Tag from '@components/Tag';
import { FC } from 'react';

interface Props {
  tags?: string[];
}

const Tags: FC<Props> = ({ tags }) => {
  return (
    <ul className="text-sm flex justify-start items-center gap-3 w-full flex-wrap max-h-24 max-w-2xl overflow-y-scroll scrollbar-hide">
      {tags?.map((tag, idx) => (
        <Tag
          key={tag + idx}
          tag={tag}
          className="hover:bg-blue-400 dark:hover:bg-indigo-700"
        />
      ))}
    </ul>
  );
};

export default Tags;
