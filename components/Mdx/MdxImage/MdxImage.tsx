import Image from "next/image";

interface Props {
  src: string;
  alt: string;
}

function MdxImage({ src, alt }: Props) {
  return (
    <div className="w-full h-80 relative">
      <Image src={src} alt={alt} layout="fill" objectFit="contain" />
    </div>
  );
}

export default MdxImage;
