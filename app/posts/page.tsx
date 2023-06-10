import PostsPageMain from "@components/PostsPageMain";
import { getSortedPostsMetaData, PostMetaData } from "@lib/posts";
import { getAllTags } from "@lib/tag";

export default async function PostsPage() {
  const allPostsMetaData: PostMetaData[] = await getSortedPostsMetaData();
  const allTags = getAllTags();

  return (
    <PostsPageMain allPostsMetaData={allPostsMetaData} allTags={allTags} />
  );
}
