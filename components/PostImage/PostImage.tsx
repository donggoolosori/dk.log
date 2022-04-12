import { PostData } from '@lib/posts';
import Image from 'next/image';
import BlurImage from './BlurImage';

// type Props = Pick<PostData, 'blurCss' | 'coverImg'>;

interface Props {
  coverImg: string;
  blurCss: any;
  priority?: boolean;
}

export default function PostImage({ blurCss, coverImg, priority }: Props) {
  return (
    <div className="relative w-full h-full">
      <BlurImage blurCss={blurCss} />
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
