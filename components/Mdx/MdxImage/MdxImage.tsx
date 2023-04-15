import Image from "next/image";

interface Props {
  src: string;
  alt: string;
}

function MdxImage({ src, alt }: Props) {
  return (
    <div className="w-full h-auto relative">
      <Image src={src} alt={alt} sizes="100vw" fill />
    </div>
  );
}

export default MdxImage;
