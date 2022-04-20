import PostsPageMain from '@components/PostsPageMain';
import { PostMetaData } from '@lib/posts';
import { getAllTags, getTagFilteredPosts, Tags } from '@lib/tag';
import { GetStaticPaths, GetStaticProps } from 'next';

interface Props {
  filteredPosts: PostMetaData[];
  allTags: Tags;
}

export default function FilteredPosts({ filteredPosts, allTags }: Props) {
  return <PostsPageMain allPostsMetaData={filteredPosts} allTags={allTags} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const tags = getAllTags();

  const paths = tags.map((tag) => {
    return {
      params: {
        tag: tag[0],
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const allTags = getAllTags();

  const tag = params?.tag as string;

  if (!tag) {
    return {
      props: {
        filteredPosts: [],
        allTags,
      },
    };
  }
  const filteredPosts = await getTagFilteredPosts(tag);

  return {
    props: {
      filteredPosts,
      allTags,
    },
  };
};
