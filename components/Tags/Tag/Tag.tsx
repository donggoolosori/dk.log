import React from 'react';

interface Props {
  tag: string;
  count?: number;
  className?: string;
}

const Tag = ({ tag, count, className }: Props) => {
  return (
    <li className={`border-2 rounded-xl px-3 flex gap-2 ${className}`}>
      <span>{tag}</span>
      {count && <span className="text-xs">{count}</span>}
    </li>
  );
};

export default Tag;
