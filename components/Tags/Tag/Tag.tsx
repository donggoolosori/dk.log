import React from 'react';

interface Props {
  tag: string;
}

const Tag = ({ tag }: Props) => {
  return <li className="border-2 rounded-xl px-3 flex">{tag}</li>;
};

export default Tag;
