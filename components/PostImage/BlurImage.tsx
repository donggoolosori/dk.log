import { FC } from "react";

interface Props {
  blurCss: any;
}
const BlurImage: FC<Props> = ({ blurCss }) => {
  return (
    <div
      style={{
        filter: "blur(40px)",
        ...blurCss,
      }}
      className="w-full h-full"
    />
  );
};

export default BlurImage;
