import type { GetStaticProps } from 'next';
import { getSortedPostsMetaData, PostMetaData } from '@lib/posts';
import Layout from '@components/layout';
import PostCardList from '@components/PostCardWrapper';
import ProfileCard from '@components/ProfileCard';
import Link from 'next/link';

interface Props {
  allPostsMetaData: PostMetaData[];
}

export default function Home({ allPostsMetaData }: Props) {
  return (
    <Layout>
      <ProfileCard />
      <h1 className="text-3xl mb-10 text-slate-600">📌 Recent Posts</h1>
      <PostCardList allPostsMetaData={allPostsMetaData} />
      <div className="w-full flex justify-center">
        <Link href={'/posts'}>
          <a className="text-slate-600 shadow-slate-400 shadow-lg text-md mt-20 rounded-2xl p-4 hover:-translate-y-2 transition-transform duration-300">
            ✍️ MORE POSTS
          </a>
        </Link>
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsMetaData = await getSortedPostsMetaData({ recent: true });

  return {
    props: {
      allPostsMetaData,
    },
  };
};
