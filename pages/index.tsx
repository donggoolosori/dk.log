import type { GetStaticProps } from 'next';
import { getSortedPostsData, PostData } from '@lib/posts';
import Layout from '@components/layout';
import PostCardList from '@components/PostCardWrapper';
import ProfileCard from '@components/ProfileCard';
import Link from 'next/link';

interface Props {
  allPostsData: PostData[];
}

export default function Home({ allPostsData }: Props) {
  return (
    <Layout>
      <ProfileCard />
      <h1 className="text-4xl mb-10 text-slate-600">📌 Recent Posts</h1>
      <PostCardList allPostsData={allPostsData} />
      <div className="w-full flex justify-center">
        <Link href={'/posts'}>
          <a className="text-slate-600 shadow-lg shadow-sky-300 text-md mt-20 rounded-2xl p-4 hover:-translate-y-2 transition-transform duration-300">
            ✍️ MORE POSTS
          </a>
        </Link>
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = await getSortedPostsData({ recent: true });

  return {
    props: {
      allPostsData,
    },
  };
};
