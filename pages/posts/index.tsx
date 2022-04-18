import AllTags from '@components/AllTags';
import Layout from '@components/layout';
import PostCardWrapper from '@components/PostCardWrapper';
import { getSortedPostsMetaData, PostMetaData } from '@lib/posts';
import { getAllTags, Tags } from '@lib/tag';
import { GetStaticProps } from 'next';
import { ChangeEvent, useState } from 'react';

interface Props {
  allPostsMetaData: PostMetaData[];
  allTags: Tags;
}

export default function Posts({ allPostsMetaData, allTags }: Props) {
  const [input, setInput] = useState<string>('');

  const [filteredPosts, setFilteredPosts] =
    useState<PostMetaData[]>(allPostsMetaData);

  const searchHandler = (e: ChangeEvent) => {
    const { value } = e.target as HTMLInputElement;

    setInput(value);

    if (!value) {
      setFilteredPosts(allPostsMetaData);
    } else {
      setFilteredPosts(
        allPostsMetaData.filter((post) =>
          post.title.toLowerCase().includes(value.toLowerCase())
        )
      );
    }
  };

  return (
    <Layout>
      <div className="flex flex-col items-center">
        <AllTags allTags={allTags} />
        <input value={input} onChange={searchHandler} />
        <PostCardWrapper allPostsMetaData={filteredPosts} />
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsMetaData = await getSortedPostsMetaData();

  const allTags = getAllTags();

  return {
    props: {
      allPostsMetaData,
      allTags,
    },
  };
};
