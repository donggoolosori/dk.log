import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  ratio?: number;
  className?: string;
}

const FixedRatioContainer = ({ children, ratio = 66.6, className }: Props) => {
  return (
    <div className={`relative w-full h-0 overflow-hidden pb-[${ratio}%]`}>
      <div
        className={`absolute top-0 left-0 w-full h-full overflow-hidden ${
          className ? className : ''
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default FixedRatioContainer;
