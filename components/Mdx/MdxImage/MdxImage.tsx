import Image from "next/image";

interface Props {
  src: string;
  alt: string;
}

function MdxImage({ src, alt }: Props) {
  return (
    <div className="w-full relative">
      <Image
        src={src}
        alt={alt}
        width={0}
        height={0}
        sizes="100vw"
        className="object-cover w-full h-auto m-0"
      />
    </div>
  );
}

export default MdxImage;
