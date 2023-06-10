import PostsPageMain from "@components/PostsPageMain";
import { postsPageDescription, postsPageTitle } from "@constants/siteMetaData";
import { getSortedPostsMetaData, PostMetaData } from "@lib/posts";
import { getAllTags } from "@lib/tag";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: postsPageTitle,
  description: postsPageDescription,
  openGraph: {
    title: postsPageTitle,
    description: postsPageDescription,
  },
};

export default async function PostsPage() {
  const allPostsMetaData: PostMetaData[] = await getSortedPostsMetaData();
  const allTags = getAllTags();

  return (
    <PostsPageMain allPostsMetaData={allPostsMetaData} allTags={allTags} />
  );
}
