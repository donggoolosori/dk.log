import Image from "next/image";
import { IGetCSSReturn } from "plaiceholder/dist/css";
import BlurImage from "./BlurImage";

interface Props {
  coverImg: string;
  blurCss?: IGetCSSReturn;
  priority?: boolean;
  hoverScaleUp?: boolean;
}

export default function PostImage({
  blurCss,
  coverImg,
  priority,
  hoverScaleUp,
}: Props) {
  return (
    <div
      className={`relative w-full h-full transition-transform duration-200 overflow-hidden ${
        hoverScaleUp ? "group-hover:scale-110" : ""
      }`}>
      {blurCss && <BlurImage blurCss={blurCss} />}
      <Image
        src={coverImg}
        alt="cover-image"
        fill
        priority={priority}
        className="object-cover m-0"
      />
    </div>
  );
}
