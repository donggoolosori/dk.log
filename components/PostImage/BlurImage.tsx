import { IGetCSSReturn } from "plaiceholder/dist/css";

interface Props {
  blurCss: IGetCSSReturn;
}

export default function BlurImage({ blurCss }: Props) {
  return (
    <div
      style={{
        filter: "blur(40px)",
        ...blurCss,
      }}
      className="w-full h-full"
    />
  );
}
