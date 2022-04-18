import { PostMetaData } from '@lib/posts';
import { useRouter } from 'next/router';
import { ChangeEvent, useEffect, useState } from 'react';

export default function usePostSearch(posts: PostMetaData[]) {
  const [filteredPosts, setFilteredPosts] = useState<PostMetaData[]>([]);

  const route = useRouter().asPath;

  useEffect(() => {
    setFilteredPosts(posts);
  }, [route, posts]);

  const searchHandler = (e: ChangeEvent) => {
    const { value } = e.target as HTMLInputElement;

    if (!value) {
      setFilteredPosts(posts);
    } else {
      setFilteredPosts(
        posts.filter((post) =>
          post.title.toLowerCase().includes(value.toLowerCase())
        )
      );
    }
  };

  return { filteredPosts, searchHandler };
}
