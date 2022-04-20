import Tag from '@components/Tag';
import { Tags } from '@lib/tag';

interface Props {
  allTags: Tags;
}

const AllTags = ({ allTags }: Props) => {
  return (
    <div className="flex flex-wrap gap-3 max-w-3xl">
      {allTags.map((tag, idx) => (
        <Tag
          key={tag[0] + idx}
          tag={tag[0]}
          count={tag[1]}
          className="text-slate-50 border-none py-[2px] shadow-md shadow-slate-400 dark:shadow-black bg-fixed bg-gradient-to-r from-[#7F7FD5] via-[#86A8E7] to-[#91eae4] dark:from-[#8E2DE2] dark:to-[#4A00E0]"
        />
      ))}
    </div>
  );
};

export default AllTags;
