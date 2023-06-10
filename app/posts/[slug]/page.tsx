import AdjacentPosts from "@components/AdjacentPosts";
import Mdx from "@components/Mdx";
import PostImage from "@components/PostImage";
import Utterances from "@components/Utterances";
import { siteURL } from "@constants/siteMetaData";
import { getAllPosts, PostData } from "@lib/posts";

interface Props {
  params: PostData;
}

export async function generateStaticParams() {
  const posts = await getAllPosts();

  return posts;
}

export async function generateMetadata({ params }: Props) {
  const { title, description, coverImg, slug } = params;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      url: `${siteURL}/posts/${slug}`,
      images: [
        {
          url: coverImg,
        },
      ],
    },
  };
}

export default async function PostPage({ params }: Props) {
  const { title, coverImg, mdxSource, date, blurCss, adjacentPosts } = params;

  return (
    <article className="prose prose-a:no-underline dark:prose-invert max-w-none mx-auto prose-h1:mt-20 prose-headings:before:text-blue-400 prose-h1:before:content-['#\00a0'] prose-img:rounded-2xl prose-code:before:content-none prose-code:after:content-none">
      <section className="flex flex-col items-center gap-6">
        <h1 style={{ margin: 0 }} className="before:!content-none">
          {title}
        </h1>
        <h2 style={{ fontSize: "1.5rem", margin: 0 }}>{date}</h2>
        <div className="group relative w-full h-80 sm:h-[28rem] rounded-3xl my-16">
          <PostImage blurCss={blurCss} coverImg={coverImg} priority />
        </div>
      </section>
      <Mdx source={mdxSource} />
      <AdjacentPosts adjacentPosts={adjacentPosts} />
      <Utterances />
    </article>
  );
}
