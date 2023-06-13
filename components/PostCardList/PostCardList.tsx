import { PostMetaData } from "@lib/posts";
import { FC } from "react";
import PostCard from "./PostCard";

interface Props {
  allPostsMetaData: PostMetaData[];
}

const PostCardList: FC<Props> = ({ allPostsMetaData }) => {
  return (
    <div className="grid grid-col-3 lg:grid-cols-6 gap-8 mx-auto">
      {allPostsMetaData?.map((postMetaData, idx) => (
        <PostCard
          key={postMetaData.slug}
          postMetaData={postMetaData}
          priority={idx < 2}
          className={idx < 2 ? "col-span-3" : "col-span-3 xl:col-span-2"}
        />
      ))}
    </div>
  );
};

export default PostCardList;
