import Image from "next/image";
import { FC } from "react";
import BlurImage from "./BlurImage";

interface Props {
  coverImg: string;
  blurCss?: any;
  priority?: boolean;
}

const PostImage: FC<Props> = ({ blurCss, coverImg, priority }) => {
  return (
    <div className="relative w-full h-full group-hover:scale-110 transition-transform duration-300">
      {blurCss && <BlurImage blurCss={blurCss} />}
      <Image
        src={coverImg}
        alt="cover-image"
        sizes="100vw"
        fill
        priority={priority}
        className="object-cover"
      />
    </div>
  );
};

export default PostImage;
