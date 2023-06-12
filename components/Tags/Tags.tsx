interface Props {
  tags?: string[];
}

export default function Tags({ tags }: Props) {
  return (
    <div className="text-sm flex justify-start items-center gap-3 w-full flex-wrap max-h-24 max-w-2xl overflow-y-scroll scrollbar-hide">
      {tags?.map((tag, idx) => (
        <button
          key={tag + idx}
          className="btn btn-xs btn-outline btn-info rounded-full">
          {tag}
        </button>
      ))}
    </div>
  );
}
