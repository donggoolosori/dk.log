interface Props {
  blurCss: any;
}
export default function BlurImage({ blurCss }: Props) {
  return (
    <div
      style={{
        filter: 'blur(40px)',
        ...blurCss,
      }}
      className="w-full h-full"
    />
  );
}
