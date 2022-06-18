import type { GetStaticProps, NextPage } from 'next';
import { getSortedPostsMetaData, PostMetaData } from '@lib/posts';
import PostCardList from '@components/PostCardList';
import ProfileCard from '@components/ProfileCard';
import Link from 'next/link';
import { PageSEO } from '@components/SEO';
import { siteDescription, siteTitle } from '@constants/siteMetaData';

interface Props {
  allPostsMetaData: PostMetaData[];
}

const Home: NextPage<Props> = ({ allPostsMetaData }) => {
  return (
    <>
      <PageSEO title={siteTitle} description={siteDescription} />
      <ProfileCard />
      <h1 className="text-3xl mb-10 text-slate-600 dark:text-white">
        ⚡️ Recent Posts
      </h1>
      <PostCardList allPostsMetaData={allPostsMetaData} />
      <div className="w-full flex justify-center">
        <Link href={'/posts'}>
          <a className="text-slate-600 dark:text-white shadow-slate-400 dark:shadow-black shadow-lg text-md mt-20 rounded-2xl p-4 hover:-translate-y-2 transition-transform duration-300">
            ✍️ MORE POSTS
          </a>
        </Link>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const allPostsMetaData = await getSortedPostsMetaData({ recent: true });

  return {
    props: {
      allPostsMetaData,
    },
  };
};

export default Home;
