import { PostData } from '@lib/posts';
import Image from 'next/image';
import BlurImage from './BlurImage';

type Props = Pick<PostData, 'blurCss' | 'coverImg'>;

export default function PostImage({ blurCss, coverImg }: Props) {
  return (
    <div className="relative w-full h-full">
      <BlurImage blurCss={blurCss} />
      <Image src={coverImg} alt="cover-image" layout="fill" objectFit="cover" />
    </div>
  );
}
