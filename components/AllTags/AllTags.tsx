import Tag from '@components/Tags/Tag';
import { Tags } from '@lib/tag';
import React from 'react';

interface Props {
  allTags: Tags;
}

const AllTags = ({ allTags }: Props) => {
  return (
    <div className="flex flex-wrap gap-2 mb-20 max-w-3xl">
      {allTags.map((tag, idx) => (
        <Tag
          key={tag[0] + idx}
          tag={tag[0]}
          count={tag[1]}
          className="py-[1px] bg-fixed bg-gradient-to-r from-[#7F7FD5] via-[#86A8E7] to-[#91eae4] text-slate-50 border-none"
        />
      ))}
    </div>
  );
};

export default AllTags;
