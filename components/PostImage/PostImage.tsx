import Image from 'next/image';
import BlurImage from './BlurImage';

interface Props {
  coverImg: string;
  blurCss?: any;
  priority?: boolean;
}

export default function PostImage({ blurCss, coverImg, priority }: Props) {
  return (
    <div className="relative w-full h-full">
      {blurCss && <BlurImage blurCss={blurCss} />}
      <Image
        src={coverImg}
        alt="cover-image"
        layout="fill"
        objectFit="cover"
        priority={priority}
      />
    </div>
  );
}
