import type { PostMetaData } from "@lib/posts";
import PostImage from "@components/PostImage";
import Tags from "@components/Tags";
import Link from "next/link";

interface Props {
  postMetaData: PostMetaData;
  priority?: boolean;
  className?: string;
}

export default function PostCard({
  postMetaData,
  priority = false,
  className = "",
}: Props) {
  const { slug, title, date, coverImg, description, blurCss, tags } =
    postMetaData;

  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      <Link
        href={`/posts/${slug}`}
        className="group relative w-full h-80 rounded-xl overflow-hidden shadow-md">
        <PostImage
          blurCss={blurCss}
          coverImg={coverImg}
          hoverScaleUp
          priority={priority}
        />
      </Link>
      <section className="w-full flex flex-col gap-2">
        <Tags tags={tags} />
        <Link
          href={`/posts/${slug}`}
          className="group flex flex-col gap-2 w-full">
          <div className="font-semibold text-2xl w-full line-clamp-2 sm:line-clamp-1 md:line-clamp-2">
            {title}
          </div>
          <div className="text-md w-full line-clamp-2">{description}</div>
          <div className="text-md text-gray-400">{date}</div>
        </Link>
      </section>
    </div>
  );
}
