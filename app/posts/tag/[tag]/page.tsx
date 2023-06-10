import PostsPageMain from "@components/PostsPageMain";
import { getAllTags, getTagFilteredPosts } from "@lib/tag";

export default async function PostsPage({
  params,
}: {
  params: { tag: string };
}) {
  const tag = params?.tag;
  const allTags = getAllTags();
  const filteredPosts = await getTagFilteredPosts(tag);

  return <PostsPageMain allTags={allTags} allPostsMetaData={filteredPosts} />;
}
