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
      className="scale-150 w-full h-full"
    />
  );
}
