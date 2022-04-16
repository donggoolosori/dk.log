import React from 'react';

interface Props {
  tag: string;
  count?: number;
}

const Tag = ({ tag, count }: Props) => {
  return (
    <li className="border-2 rounded-xl px-3 flex gap-2">
      <span>{tag}</span>
      {count && <span className="text-xs">{count}</span>}
    </li>
  );
};

export default Tag;
