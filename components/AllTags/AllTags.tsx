import Tag from '@components/Tags/Tag';
import { Tags } from '@lib/tag';
import React from 'react';

interface Props {
  allTags: Tags;
}

const AllTags = ({ allTags }: Props) => {
  return (
    <div className="flex flex-wrap gap-2 mb-20">
      {allTags.map((tag, idx) => (
        <Tag key={tag[0] + idx} tag={tag[0]} />
      ))}
    </div>
  );
};

export default AllTags;
